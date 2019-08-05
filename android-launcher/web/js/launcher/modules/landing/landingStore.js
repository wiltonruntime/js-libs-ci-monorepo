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

define(function(require) {
    "use strict";

    var Vue = require("vue");

    return {
        namespaced: true,

        actions: {
            cloneOrPullGitRepo: require("./actions/cloneOrPullGitRepo"),
            startApplication: require("./actions/startApplication")
        },

        mutations: {
            updateGitUrl: function(state, gitUrl) { Vue.set(state, "gitUrl", gitUrl); },
            updateUsername: function(state, username) { Vue.set(state, "username", username); },
            updatePassword: function(state, password) { Vue.set(state, "password", password); },
            updateGitBranch: function(state, gitBranch) { Vue.set(state, "gitBranch", gitBranch); },
            updateSkipUpdate: function(state, skipUpdate) { Vue.set(state, "skipUpdate", skipUpdate); },
            updateDeleteApp: function(state, deleteApp) { Vue.set(state, "deleteApp", deleteApp); },
            updateAutoLaunch: function(state, autoLaunch) { Vue.set(state, "autoLaunch", autoLaunch); }
        },

        state: {
            gitUrl: "https://github.com/wilton-iot/wilton.js.git",
            username: "",
            password: "",
            gitBranch: "master",
            skipUpdate: false,
            deleteApp: false,
            autoLaunch: false
        }

    };
});
