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

define((require) => {

    const Vue = require("vue");

    return {
        namespaced: true,

        actions: {
            fetchRepo: require("./actions/fetchRepo")
        },

        mutations: {
            initial: require("./mutations/initial"),
            alertClosed: require("./mutations/alertClosed"),

            // fetchRepo
            fetchRepo_began: require("./mutations/fetchRepo").began,
            fetchRepo_failed: require("./mutations/fetchRepo").failed,
            fetchRepo_succeeded: require("./mutations/fetchRepo").succeeded,

            // setters
            setFetchType: (state, val) => Vue.set(state, "fetchType", val),
            setGitUrl: (state, val) => Vue.set(state, "gitUrl", val),
            setDestination: (state, val) => Vue.set(state, "destination", val),
            setUsername: (state, val) => Vue.set(state, "username", val),
            setPassword: (state, val) => Vue.set(state, "password", val),
            setGitBranch: (state, val) => Vue.set(state, "gitBranch", val)
        },

        state: {
            status: null,
            alertMessage: null,
            fetchType: null,
            gitUrl: null,
            destination: null,
            username: null,
            password: null,
            gitBranch: null 
        }

    };
});
