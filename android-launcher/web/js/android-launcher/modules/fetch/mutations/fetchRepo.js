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
    "vue",
    "json!../fetchStatus.json"
], (Vue, status) => {
    const module = "fetch";

    return {
        began(state) {
            Vue.set(state, "status", status.IN_PROGRESS);
            Vue.set(state, "alertMessage", "Performing repository fetch ...");
        },

        failed(state, error) {
            Vue.set(state, "status", status.ERROR);
            Vue.set(state, "alertMessage", `Git fetch failed, message: [${error}]`);
        },

        succeeded(state, list) {
            Vue.set(state, "status", status.SUCCESS);
            Vue.set(state, "alertMessage", "Repository fetched successfully");
        }

    };
});
