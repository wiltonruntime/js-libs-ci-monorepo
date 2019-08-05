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
    "module",
    "buffer",
    "lodash/bind",
    "vue-require/store/commit",
    "vue-require/store/dispatch",
    "vue-require/store/state",
    "text!./landing.html"
], function (module, buffer, bind, commit, dispatch, state, template) {
    "use strict";

    return {
        template: template,

        created: function() {
            dispatch("openBackendConnection", bind(function() {
                dispatch("loadAppState", bind(function() {
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

        data: function() {
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
            stopLaunch: function() {
                this.settingsVisible = true;
                this.stopButtonVisible = false;
                this.isDueToLaunch = false;
                this.setReadyState();
            },

            launch: function() {
                dispatch("landing/cloneOrPullGitRepo", bind(function(err, res) {
                    if (null !== err) {
                        console.error(err);
                        this.setErrorState(err);
                    } else {
                        dispatch("landing/startApplication", {
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

            saveAndLaunch: function() {
                this.setLaunchingState();
                commit("landing/updateGitUrl", this.gitUrl);
                commit("landing/updateUsername", this.username);
                commit("landing/updatePassword", buffer.Buffer.from(this.password).toString("base64"));
                commit("landing/updateGitBranch", this.gitBranch);
                commit("landing/updateSkipUpdate", "true" === this.skipUpdate);
                commit("landing/updateDeleteApp", "true" === this.deleteApp);
                commit("landing/updateAutoLaunch", "true" === this.autoLaunch);
                dispatch("saveAppState", bind(function() {
                    this.launch();
                }, this));
            },

            setReadyState: function() {
                this.infoCss["alert-primary"] = false;
                this.infoCss["alert-light"] = true;
                this.infoText = "Ready to launch!";
                this.settingsVisible = true;
                this.enabled = true;
            },

            setLaunchingState: function() {
                this.infoCss["alert-light"] = false;
                this.infoCss["alert-danger"] = false;
                this.infoCss["alert-primary"] = true;
                this.infoText = "Launching ...";
                this.enabled = false;
                this.stopButtonEnabled = false;
            },

            setErrorState: function(err) {
                this.settingsVisible = true;
                this.stopButtonVisible = false;
                this.isDueToLaunch = false;
                this.infoCss["alert-primary"] = false;
                this.infoCss["alert-danger"] = true;
                this.infoText = err.replace(/\n/g, "\n<br>");
                this.enabled = true;
            }
        }
    };
});
