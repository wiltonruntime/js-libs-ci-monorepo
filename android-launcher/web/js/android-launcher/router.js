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
    const VueRouter = require("vue-router");
    const routerHolder = require("vue-require/router/routerHolder");

    Vue.use(VueRouter);

    const res = new VueRouter({
        linkActiveClass: "list-group-item-secondary",
        linkExactActiveClass: "list-group-item-secondary",
        routes: [
            { path: "/", redirect: "/launch" },
            { path: "/launch", component: require("./modules/launch/launch") },
            { path: "/fetch", component: require("./modules/fetch/fetch") },
            { path: "/browse", component: require("./modules/browse/browse") },
            { path: "/about", component: require("./modules/about/about") }
        ]
    });

    routerHolder.set(res);

    return res;
});
