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

"use strict";

define([
    // libs
    "module",
    "lodash/isObject",
    // wilton
    "wilton/android/runOnRhinoThread",
    "wilton/fs",
    "wilton/Logger",
    "wilton/misc",
    "wilton/net",
    "wilton/utils",
    // other
    "../conf",
    "./appState"
], (
        module, isObject, // libs
        runOnRhinoThread, fs, Logger, { wiltonConfig }, net, utils, // wilton
        conf, appState // other
) => {
    const logger = new Logger(module.id);

    function loadLauncherConf(appDir) {
        const confFile = appDir + "conf/config.json";
        const confStr = fs.readFile(confFile);
        const ac = JSON.parse(confStr);
        const lc = ac.launcher;
        if (!isObject(lc)) {
            throw new Error("Cannot load launcher options from app config," +
                    " directory: [" + appDir + "]");
        }
        return lc;
    }

    return (opts) => {
        utils.hasProperties(opts, ["application", "autoLaunch"]);
        logger.info(`Is due to start application, name: [${opts.application}]`);

        // save last launch opts
        appState.save(opts);

        const base = wiltonConfig().wiltonHome;
        const appDir = base + "apps/" + opts.application;
        const lc = loadLauncherConf(appDir + "/");

        var rorUrl = "http://127.0.0.1:" + conf.server.tcpPort + "/android-launcher/server/views/runOnRhino";
        runOnRhinoThread({
            module: "wilton/android/startAppService",
            args: [opts.application, lc, rorUrl]
        });

        logger.info("Application spawned, waiting for initialization ...");
        net.waitForTcpConnection({
            ipAddress: "127.0.0.1",
            tcpPort: lc.tcpPort,
            timeoutMillis: 10000 
        });
        logger.info("Application initialization complete");

        return lc;
    };
});
