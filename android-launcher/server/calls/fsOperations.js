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

define([
    "module",
    "wilton/Channel",
    "wilton/fs",
    "wilton/Logger",
    "wilton/misc"
], (module, Channel, fs, Logger, { wiltonConfig }) => {
    const logger = new Logger(module.id);

    const dir = wiltonConfig().wiltonHome;
    //const dir = "/home/alex/projects/wilton_other/tmp/";
    const appsDir = dir + "apps/";
    const libsDir = dir + "libs/";

    function calculateStatsRecursive(dir, accum = {
            filesCount: 0,
            sizeBytes: 0
    }) {
        fs.readdir(dir).forEach(name => {
            const path = dir + "/" + name;
            const st = fs.stat(path);
            if (st.isFile) {
                accum.filesCount += 1;
                accum.sizeBytes = st.size;
            } else if (st.isDirectory) {
                accum = calculateStatsRecursive(path, accum); 
            } else {
                // ignore
            }
        });
        return accum;
    }

    return {
        listApps() {
            return fs.readdir(appsDir).map(name => {
                const { filesCount, sizeBytes } = calculateStatsRecursive(appsDir + name);
                return { name, filesCount, sizeBytes };
            });
        },

        deleteApp(name) {
            fs.rmdir(appsDir + name);
        },

        listLibs() {
            return fs.readdir(libsDir).map(name => {
                const { filesCount, sizeBytes } = calculateStatsRecursive(libsDir + name);
                return { name, filesCount, sizeBytes };
            });
        },

        deleteLib(name) {
            fs.rmdir(libsDir + name);
        },

        listAppsAndLibs() {
            return {
                apps: this.listApps(),
                libs: this.listLibs()
            };
        }
    };
});
