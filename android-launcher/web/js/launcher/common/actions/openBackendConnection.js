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
    "vue-require/websocket/socketHolder",
    "wilton/web/wsClient",
    "wilton/utils",
    "json!/android-launcher/server/views/config"
], function(socketHolder, wsClient, utils, conf) {
    "use strict";

    function onError(obj) {
        var msg = obj;
        if ("object" === typeof(msg) &&
                "undefined" !== msg.stack && "undefined" !== msg.message) {
            msg = utils.formatError(msg);
        } else {
            msg = JSON.stringify(obj, null, 4);
            if (isEmptyObject(JSON.parse(msg))) {
                msg = String(obj);
            }
        }
        console.error(msg);
    }

    function logger(obj) {
        var msg = JSON.stringify(obj, null, 4);
        console.log(msg);
    }

    return function(context, cb) {

        wsClient.open(conf.wsUrl, {
            onError: onError,
            logger: logger,
            timeoutMillis: conf.wsTimeoutMillis
        }, function(err, sock) {
            if (err) {
               console.error(err);
               return;
            }
            // race condition here should be negligible
            socketHolder.set(sock);
            if ("function" === typeof(cb)) {
                cb();
            }
        });
    };
});
