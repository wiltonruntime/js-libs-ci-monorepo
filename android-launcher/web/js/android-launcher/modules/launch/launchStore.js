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

define((require) => {

    const Vue = require("vue");

    return {
        namespaced: true,

        actions: {
            startApplication: require("./actions/startApplication"),
            loadList: require("./actions/loadList"),
            loadLastLaunched: require("./actions/loadLastLaunched")
        },

        mutations: {
            initial: require("./mutations/initial"),
            alertClosed: require("./mutations/alertClosed"),
            lastLaunchLoaded: require("./mutations/lastLaunchLoaded"),

            load_began: require("./mutations/load").began,
            load_failed: require("./mutations/load").failed,
            load_succeeded: require("./mutations/load").succeeded,

            appLaunch_began: require("./mutations/appLaunch").began,
            appLaunch_failed: require("./mutations/appLaunch").failed,
            appLaunch_succeeded: require("./mutations/appLaunch").succeeded,

            setAppList: (state, val) => Vue.set(state, "appList", val),
            setApplication: (state, val) => Vue.set(state, "application", val),
            setAutoLaunch: (state, val) => Vue.set(state, "autoLaunch", !!val),
            setAutoLaunchCanceled: (state, val) => Vue.set(state, "autoLaunchCanceled", !!val)
        },

        state: {
            status: null,
            alertMessage: null,
            appList: null,
            application: null,
            autoLaunch: null,
            autoLaunchCanceled: null
        }

    };
});
