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
    // libs
    "module",
    "vue-require/store/commit",
    "vue-require/store/dispatch",
    "vue-require/store/state",
    // components
    "android-launcher/components/alert/Alert",
    "json!android-launcher/components/alert/alertStyles.json",
    // local
    "json!./browseStatus.json",
    "json!./entryType.json",
    "text!./browse.html"
], (
        module, commit, dispatch, state, // libs
        Alert, alertStyles, // components
        status, etype, template // local
) => {

    return {
        template: template,

        beforeCreate() {
            commit(null, "setHeaderLabel", "Browse");
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
                    case status.LOADING: return alertStyles.SECONDARY; break;
                    case status.IN_PROGRESS: return alertStyles.SECONDARY; break;
                    case status.SUCCESS: return alertStyles.SUCCESS; break;
                    case status.ERROR: return alertStyles.DANGER; break;
                    default: return alertStyles.LIGHT;
                }
            },

            applications: () => state(module).applications,

            libraries: () => state(module).libraries,

            allowDeleteApps: {
                get: () => state(module).allowDeleteApps,
                set: (val) => commit(module, "setAllowDeleteApps", val)
            },

            allowDeleteLibs: {
                get: () => state(module).allowDeleteLibs,
                set: (val) => commit(module, "setAllowDeleteLibs", val)
            },

            showEmptyLabels: () => status.LOADING !== state(module).status
        },

        methods: {
            deleteApp(app) {
                commit(module, "setAllowDeleteApps", false);
                dispatch(module, "delete", {
                    name: app.name,
                    entryType: etype.APPLICATION
                });
            },

            deleteLib(lib) {
                commit(module, "setAllowDeleteLibs", false);
                dispatch(module, "delete", {
                    name: lib.name,
                    entryType: etype.LIBRARY
                });
            },

            alertClosed() {
                commit(module, "alertClosed");
            }
        },

        mounted() {
            dispatch(module, "loadList");
        }
    };
});
