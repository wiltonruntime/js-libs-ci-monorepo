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

"use strict";

define([
    // deps
    "module",
    "lodash/isEmpty",
    "vue-require/store/commit",
    "vue-require/store/dispatch",
    "vue-require/store/state",
    // components
    "android-launcher/components/alert/Alert",
    "json!android-launcher/components/alert/alertStyles.json",
    // local
    "json!./launchStatus.json",
    "text!./launch.html"
], (
        module, isEmpty, commit, dispatch, state,
        Alert, alertStyles,
        status, template
) => {

    return {
        template: template,

        beforeCreate() {
            commit(null, "setHeaderLabel", "Launch");
            commit(module, "initial");
        },

        components: {
            "launcher-alert": new Alert([alertStyles.SUCCESS, alertStyles.DANGER])
        },

        computed: {

            enabled: () => ![
                status.LOADING,
                status.IN_PROGRESS,
                status.AUTO_LAUNCH,
                status.LAUNCHED
            ].includes(state(module).status),

            alertMessage: () => state(module).alertMessage,

            alertStyle() {
                switch(state(module).status) {
                    case status.LOADING: return alertStyles.SECONDARY; break;
                    case status.IN_PROGRESS: return alertStyles.SECONDARY; break;
                    case status.AUTO_LAUNCH: return alertStyles.SECONDARY; break;
                    case status.LAUNCHED: return alertStyles.SUCCESS; break;
                    case status.SUCCESS: return alertStyles.SUCCESS; break;
                    case status.ERROR: return alertStyles.DANGER; break;
                    default: return alertStyles.LIGHT;
                }
            },

            appList: () => state(module).appList,

            application: {
                get: () => state(module).application,
                set: (val) => commit(module, "setApplication", val)
            },

            autoLaunch: {
                get: () => state(module).autoLaunch,
                set: (val) => commit(module, "setAutoLaunch", val)
            },

            showCancelButton: () => status.AUTO_LAUNCH === state(module).status,

            autoLaunchCanceled: () => state(module).autoLaunchCanceled,

            launchButtonEnabled() {
                return status.READY === state(module).status && 
                        this.enabled && 
                        !isEmpty(this.application);
            }
        },

        methods: {
            launch() {
                dispatch(module, "startApplication");
            },

            alertClosed() {
                commit(module, "alertClosed");
            },

            cancelAutoLaunch() {
                commit(module, "setAutoLaunchCanceled", true);
            }
        },

        mounted() {
            dispatch(module, "loadList");
        }
/*

        created() {
            dispatch(null, "openBackendConnection", bind(function() {
                dispatch(null, "loadAppState", bind(function() {
                    this.appStateLoaded = true;
                    this.gitUrl = state(module).gitUrl;
                    this.username = state(module).username;
                    this.password = buffer.Buffer.from(state(module).password, "base64").toString("utf8");
                    this.gitBranch = state(module).gitBranch;
                    this.skipUpdate = String(state(module).skipUpdate);
                    this.deleteApp = String(state(module).deleteApp);
                    var autoLaunch = state(module).autoLaunch;
                    this.autoLaunch = String(autoLaunch);

                    if (autoLaunch) {
                        this.infoText = "Is due to launch, press 'Stop' to abort ...";
                        this.isDueToLaunch = true;
                        this.stopButtonEnabled = true;
                        this.stopButtonVisible = true;

                        setTimeout(bind(function() {
                            if (this.isDueToLaunch) {
                                this.setLaunchingState();
                                this.launch();
                            }
                        }, this), 3000);

                    } else {
                        this.setReadyState();
                    }
                }, this));
            }, this));
        },

        data() {
            return {
                gitUrl: "",
                username: "",
                password: "",
                gitBranch: "",
                skipUpdate: false,
                deleteApp: false,
                autoLaunch: false,

                enabled: false,

                infoCss: {
                    "alert": true,
                    "alert-primary": true,
                    "alert-light": false,
                    "alert-danger": false
                },
                infoText: "Loading ...",
                settingsVisible: false,
                stopButtonVisible: false,
                stopButtonEnabled: false,
                isDueToLaunch: false,
                appStateLoaded: false
            };
        },

        methods: {
            stopLaunch() {
                this.settingsVisible = true;
                this.stopButtonVisible = false;
                this.isDueToLaunch = false;
                this.setReadyState();
            },

            launch() {
                dispatch(module, "cloneOrPullGitRepo", bind(function(err, res) {
                    if (null !== err) {
                        console.error(err);
                        this.setErrorState(err);
                    } else {
                        dispatch(module, "startApplication", {
                            repoPath: res.repoPath,
                            options: res.options,
                            cb: bind(function(err) {
                                if (null !== err) {
                                    console.error(err);
                                    this.setErrorState(err);
                                } else {
                                    window.location.href = "http://127.0.0.1:" + res.options.tcpPort;
                                }
                            }, this)
                        });
                    }
                }, this));
            },

            saveAndLaunch() {
                this.setLaunchingState();
                commit(module, "updateGitUrl", this.gitUrl);
                commit(module, "updateUsername", this.username);
                commit(module, "updatePassword", buffer.Buffer.from(this.password).toString("base64"));
                commit(module, "updateGitBranch", this.gitBranch);
                commit(module, "updateDirName", this.dirName);
                commit(module, "updateSkipUpdate", "true" === this.skipUpdate);
                commit(module, "updateDeleteApp", "true" === this.deleteApp);
                commit(module, "updateAutoLaunch", "true" === this.autoLaunch);
                dispatch(null, "saveAppState", bind(function() {
                    this.launch();
                }, this));
            },
        }
 */
    };

});
