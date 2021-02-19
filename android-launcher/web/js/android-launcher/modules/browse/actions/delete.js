/*
 * Copyright 2020, alex at staticlibs.net
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
    "json!../entryType.json"
], (delay, backendcall, commit, dispatch, etype) => {
    const module = "browse";

    return (context, {name, entryType}) => {
        commit(module, "delete_began");
        backendcall({
            module: "android-launcher/server/calls/fsOperations",
            func: etype.APPLICATION === entryType ? "deleteApp" : "deleteLib",
            args: [name]
        }, (err) => {
            if (null !== err) {
                console.error(err);
                commit(module, "delete_failed", err);
                return;
            }
            delay(() => {
                dispatch(module, "loadList");
            }, 500);
        });
    };
});
