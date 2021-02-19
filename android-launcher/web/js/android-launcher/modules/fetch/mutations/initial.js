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
    "json!../fetchLabels.json",
    "json!../fetchStatus.json",
    "json!../fetchType.json"
], (Vue, labels, status, ftypes) => {

    return (state) => {
        if (null === state.status) {
            Vue.set(state, "status", status.INITIAL);
        }
        if (null === state.alertMessage) {
            Vue.set(state, "alertMessage", labels.ALERT_MESSAGE_INITIAL);
        }
        if (null === state.fetchType) {
            Vue.set(state, "fetchType", ftypes.APPLICATION);
        }
        if (null === state.gitUrl) {
            Vue.set(state, "gitUrl", "https://github.com/wiltonruntime/example_vueapp.git");
        }
        if (null === state.destination) {
            Vue.set(state, "destination", "vueapp");
        }
        if (null === state.username) {
            Vue.set(state, "username", "");
        }
        if (null === state.password) {
            Vue.set(state, "password", "");
        }
        if (null === state.gitBranch) {
            Vue.set(state, "gitBranch", "master");
        }
    };
});
