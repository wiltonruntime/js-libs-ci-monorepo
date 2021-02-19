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

// top level define required because enforceDefine is used

define([], () => {

    // requirejs config, adjust as needed
    requirejs.config({
        baseUrl: "/stdlib/",
        enforceDefine: true,
        nodeIdCompat: true,
        waitSeconds: 15,
        paths: {
            "android-launcher": "/web/js/android-launcher"
        },
        // these plugins are used to load wilton-packages.json
        packages: [
            {name: "text", main: "text"},
            {name: "json", main: "json"}
        ]
    });

    // load packages config and compat globals
    require(["json!wilton-requirejs/wilton-packages.json",
            "wilton-requirejs/compatGlobals"], (packages) => {

        // complete config
        requirejs.config({
            packages: packages
        });

        // init buffer
        require(["buffer"], (buffer) => {
            // set global compat Buffer
            Buffer = buffer.Buffer;

            // start app
            require([
                "vue",
                "android-launcher/router",
                "android-launcher/store",
                "android-launcher/app"
            ], (Vue, router, store, app) => {
                new Vue({
                    el: '#root',
                    router: router,
                    store: store,
                    template: "<App/>"
                });
            });
        });
    });
});
