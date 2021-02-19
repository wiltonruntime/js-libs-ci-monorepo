/*
 * Copyright 2021, alex at staticlibs.net
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
    "lodash/isEmpty",
    "vue",
    "json!../launchStatus.json"
], (isEmpty, Vue, status) => {

    return (state, st) => {
        if (isEmpty(state.application) && !isEmpty(st.application)) {
            Vue.set(state, "application", st.application);
        }
        if (false === state.autoLaunch && true === st.autoLaunch) {
            Vue.set(state, "autoLaunch", true);
        }
        if (true === st.autoLaunch) {
            Vue.set(state, "status", status.AUTO_LAUNCH);
            Vue.set(state, "alertMessage", `Is due to launch application, name: [${st.application}]`);
        }
    };
});
