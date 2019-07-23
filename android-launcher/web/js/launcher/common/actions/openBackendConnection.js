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
    "vue-require/websocket/withSock",
    "wilton/utils",
    "json!/android-launcher/server/views/config"
], function(withSock, utils, conf) {
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
        // sync call, no networking, only sets options
        withSock(null, {
            url: conf.wsUrl,
            onError: onError,
            logger: logger,
            timeoutMillis: conf.wsTimeoutMillis
            // other possible options are forwarded to wsClient
            // https://wilton-iot.github.io/wilton/docs/html/namespaceweb__wsClient.html#a9a7f2f55ba84b066190bb357f45a7d36
        });
        cb();
    };
});
