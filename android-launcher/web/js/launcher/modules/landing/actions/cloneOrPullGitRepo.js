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
    "vue-require/store/state",
    "vue-require/websocket/backendcall"
], function(state, backendcall) {
    "use strict";
    var module = "landing";

    return function(context, cb) {
        backendcall({
            module: "android-launcher/server/calls/gitOperations",
            func: "cloneOrPull",
            args: [
                {
                    gitUrl: state(module).gitUrl,
                    username: state(module).username,
                    password: state(module).password,
                    gitBranch: state(module).gitBranch,
                    skipUpdate: state(module).skipUpdate,
                    deleteApp: state(module).deleteApp
                }
            ]
        }, cb);
    };
});