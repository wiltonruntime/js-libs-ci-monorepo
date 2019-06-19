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
    "wilton/Channel",
    "wilton/Logger",
    "wilton/misc",
    "wilton/Server",
    "json!./conf/config.json"
], function(module, Channel, Logger, misc, Server, conf) {
    "use strict";
    var logger = new Logger(module.id);

    return function() {
        // init logging
        Logger.initialize(conf.logging);

        // share conf for other threads
        new Channel("android-launcher/server/conf", 1).send(conf);
        // lock for appState file
        new Channel("android-launcher/server/calls/appState", 1);

        // server
        logger.info("Starting server on port: [" + conf.server.tcpPort + "]");
        var server = new Server({
            ipAddress: conf.server.ipAddress,
            tcpPort: conf.server.tcpPort,
            views: [
                "android-launcher/server/views/config",
                "android-launcher/server/views/websocket"
            ],
            rootRedirectLocation: "/web/index.html",
            documentRoots: [
            {
                resource: "/web",
                zipPath: misc.wiltonConfig().wiltonHome + conf.server.stdlibFileName,
                zipInnerPrefix: "android-launcher/web/",
                cacheMaxAgeSeconds: conf.server.cacheMaxAgeSeconds
            },
            {
                resource: "/stdlib",
                zipPath: misc.wiltonConfig().wiltonHome + conf.server.stdlibFileName,
                cacheMaxAgeSeconds: conf.server.cacheMaxAgeSeconds
            }]
        });

        return server;
    };

});
