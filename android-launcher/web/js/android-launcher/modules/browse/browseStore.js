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
            loadList: require("./actions/loadList"),
            delete: require("./actions/delete")
        },

        mutations: {
            initial: require("./mutations/initial"),
            alertClosed: require("./mutations/alertClosed"),

            // load
            load_began: require("./mutations/load").began,
            load_failed: require("./mutations/load").failed,
            load_succeeded: require("./mutations/load").succeeded,

            // delete
            delete_began: require("./mutations/delete").began,
            delete_failed: require("./mutations/delete").failed,

            // setters
            setApplications: (state, val) => Vue.set(state, "applications", val),
            setLibraries: (state, val) => Vue.set(state, "libraries", val),
            setAllowDeleteApps: (state, val) => Vue.set(state, "allowDeleteApps", val),
            setAllowDeleteLibs: (state, val) => Vue.set(state, "allowDeleteLibs", val)
        },

        state: {
            status: null,
            alertMessage: null,
            applications: null,
            libraries: null,
            allowDeleteApps: false,
            allowDeleteLibs: false
        }

    };
});
