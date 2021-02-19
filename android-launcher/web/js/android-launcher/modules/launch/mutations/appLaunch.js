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
    "vue",
    "json!../launchStatus.json"
], (Vue, status) => {
    const module = "launch";

    return {
        began(state) {
            Vue.set(state, "status", status.IN_PROGRESS);
            Vue.set(state, "alertMessage", "Launching ...");
        },

        failed(state, error) {
            Vue.set(state, "status", status.ERROR);
            Vue.set(state, "alertMessage", `Launch failed, message: [${error}]`);
        },

        succeeded(state, list) {
            Vue.set(state, "status", status.LAUNCHED);
            Vue.set(state, "alertMessage", "Application started, opening UI ...");
        }

    };
});
