/*
 * Copyright 2021, alex at staticlibs.net
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
    "lodash/delay",
    "vue-require/websocket/backendcall",
    "vue-require/store/commit",
    "vue-require/store/dispatch",
    "vue-require/store/state"
], (delay, backendcall, commit, dispatch, state) => {
    const module = "launch";

    return (context) => {
        backendcall({
            module: "android-launcher/server/calls/appState",
            func: "load"
        }, (err, st) => {
            if (null !== err) {
                console.error(err);
                commit(module, "load_failed", err);
                return;
            }
            commit(module, "lastLaunchLoaded", st);
            if (true === st.autoLaunch) {
                delay(() => {
                    if (!state(module).autoLaunchCanceled) {
                        dispatch(module, "startApplication");
                    } else {
                        commit(module, "alertClosed");
                    }
                }, 3000);
            }
        });
    };
});
 