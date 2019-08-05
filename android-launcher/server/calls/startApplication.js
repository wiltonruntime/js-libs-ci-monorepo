/*
 * Copyright 2019, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "module",
    "wilton/android/runOnRhinoThread",
    "wilton/Logger",
    "wilton/net",
    "wilton/utils",
    "../conf"
], function(module, runOnRhinoThread, Logger, net, utils, conf) {
    "use strict";
    var logger = new Logger(module.id);

    return function(repoPath, launchOpts) {
        utils.hasProperties(launchOpts, ["tcpPort", "rootModuleName", "startupModule"]);
        logger.info("Is due to start application on path: [" + repoPath + "]");

        // strip ending slash
        if (utils.endsWith(repoPath, "/")) {
            repoPath = repoPath.substring(0, repoPath.length - 1);
        }

        var rorUrl = "http://127.0.0.1:" + conf.server.tcpPort + "/android-launcher/server/views/runOnRhino";
        runOnRhinoThread({
            module: "wilton/android/startAppService",
            args: [repoPath, launchOpts, rorUrl]
        });

        logger.info("Application spawned, waiting for initialization ...");
        net.waitForTcpConnection({
            ipAddress: "127.0.0.1",
            tcpPort: launchOpts.tcpPort,
            timeoutMillis: 10000 
        });
        logger.info("Application initialization complete");
    };
});
