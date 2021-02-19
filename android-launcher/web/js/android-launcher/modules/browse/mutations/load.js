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
    "filesize",
    "vue",
    "vue-require/store/commit",
    "json!../browseLabels.json",
    "json!../browseStatus.json"
], (filesize, Vue, commit, labels, status) => {
    const module = "browse";

    function decorateFileSize(list) {
        return list.map(li => {
            li.sizeString = filesize(li.sizeBytes);
            return li;
        });
    }

    return {
        began(state) {
            Vue.set(state, "status", status.LOADING);
            Vue.set(state, "alertMessage", labels.ALERT_MESSAGE_LOADING);
        },

        failed(state, error) {
            Vue.set(state, "status", status.ERROR);
            Vue.set(state, "alertMessage", `Load failed, message: [${error}]`);
        },

        succeeded(state, res) {
            Vue.set(state, "status", status.READY);
            Vue.set(state, "alertMessage", labels.ALERT_MESSAGE_READY);
            commit(module, "setApplications", decorateFileSize(res.apps));
            commit(module, "setLibraries", decorateFileSize(res.libs));
        }

    };
});
