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
    // deps
    "module",
    "buffer",
    "lodash/isEmpty",
    "vue-require/store/commit",
    "vue-require/store/dispatch",
    "vue-require/store/state",
    // components
    "android-launcher/components/alert/Alert",
    "json!android-launcher/components/alert/alertStyles.json",
    // local
    "android-launcher/common/utils/scrollToTop",
    "json!./fetchStatus.json",
    "json!./fetchType.json",
    "text!./fetch.html"
], (
        module, buffer, isEmpty, commit, dispatch, state, // deps
        Alert, alertStyles, // components
        scrollToTop, status, ftypes, template // local
) => {

    return {
        template: template,

        beforeCreate() {
            commit(null, "setHeaderLabel", "Fetch");
            commit(module, "initial");
        },

        components: {
            "launcher-alert": new Alert([alertStyles.SUCCESS, alertStyles.DANGER])
        },

        computed: {

            enabled: () => status.IN_PROGRESS !== state(module).status,

            alertMessage: () => state(module).alertMessage,

            alertStyle () {
                switch(state(module).status) {
                    case status.IN_PROGRESS: return alertStyles.SECONDARY; break;
                    case status.SUCCESS: return alertStyles.SUCCESS; break;
                    case status.ERROR: return alertStyles.DANGER; break;
                    default: return alertStyles.LIGHT;
                }
            },

            fetchType: {
                get: () => state(module).fetchType,
                set: (val) => commit(module, "setFetchType", val)
            },

            gitUrl: {
                get: () => state(module).gitUrl,
                set: (val) => commit(module, "setGitUrl", val.trim())
            },

            destination: {
                get: () => {
                    const val = state(module).destination;
                    if (!isEmpty(val)) {
                        return val;
                    }
                    return state(module).gitUrl.replace(/^.*\//, "").replace(/(\?|\.).*$/, "");
                },
                set: (val) => commit(module, "setDestination", val.trim())
            },

            username: {
                get: () => state(module).username,
                set: (val) => commit(module, "setUsername", val.trim())
            },

            password: {
                get: () => buffer.Buffer.from(state(module).password, "base64").toString("utf8"),
                set: (val) => commit(module, "setPassword", buffer.Buffer.from(val).toString("base64"))
            },

            gitBranch: {
                get: () => state(module).gitBranch,
                set: (val) => commit(module, "setGitBranch", val.trim())
            }
        },

        methods: {
            fetchRepo() {
                commit(module, "setDestination", this.destination);
                dispatch(module, "fetchRepo");
                scrollToTop();
            },

            alertClosed() {
                commit(module, "alertClosed");
            }
        }
    };
});
