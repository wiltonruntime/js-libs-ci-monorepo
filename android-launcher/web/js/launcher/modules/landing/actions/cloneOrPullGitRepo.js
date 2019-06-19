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
    "vue-require/store/checkActionError",
    "vue-require/store/dispatch",
    "vue-require/store/state",
    "vue-require/websocket/backendcall"
], function(checkActionError, dispatch, state, backendcall) {
    "use strict";
    var module = "landing";

    return function(context) {
        backendcall({
            module: "android-launcher/server/calls/gitOperations",
            func: "cloneOrPull",
            args: [state(module).gitUrl, state(module).username,
                state(module).password, state(module).gitBranch]
        }, function(err, res) {
            if (checkActionError(err)) return;
            dispatch("landing/startApplication", res);
        });
    };
});