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

        created() {
            dispatch("openBackendConnection", bind(function() {
                dispatch("loadAppState", bind(function() {
                    this.gitUrl = state(module).gitUrl;
                    this.username = state(module).username;
                    this.password = buffer.Buffer.from(state(module).password, "base64").toString("utf8");
                    this.gitBranch = state(module).gitBranch;
                    this.loading = false;
                }, this));
            }, this));
        },

        data: function() {
            return {
                gitUrl: "",
                username: "",
                password: "",
                gitBranch: "",
                loading: true
            };
        },

        methods: {
            launch: function() {
                commit("landing/updateGitUrl", this.gitUrl);
                commit("landing/updateUsername", this.username);
                commit("landing/updatePassword", buffer.Buffer.from(this.password).toString("base64"));
                commit("landing/updateGitBranch", this.gitBranch);
                dispatch("saveAppState", function() {
                    dispatch("landing/cloneOrPullGitRepo");
                });
            }
        }
    };
});
