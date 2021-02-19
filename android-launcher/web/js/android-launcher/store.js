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
    const Vuex = require("vuex");
    const storeHolder = require("vue-require/store/storeHolder");

    Vue.use(Vuex);

    const res = new Vuex.Store({
        strict: true,

        actions: {
            loadAppState: require("./common/actions/loadAppState"),
            saveAppState: require("./common/actions/saveAppState")
        },

        modules: {
            launch: require("./modules/launch/launchStore"),
            fetch: require("./modules/fetch/fetchStore"),
            browse: require("./modules/browse/browseStore")
        },

        mutations: {
            updateStateFromSaved: require("./common/mutations/updateStateFromSaved"),

            setHeaderLabel: (state, val) => Vue.set(state, "headerLabel", val)
        },

        state: {
            headerLabel: ""
        }
    });

    storeHolder.set(res);

    return res;
});
