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

define([
    "module",
    "wilton/Channel",
    "wilton/fs",
    "wilton/Logger",
    "wilton/misc"
], (module, Channel, fs, Logger, misc) => {
    const logger = new Logger(module.id);

    const path = misc.wiltonConfig().wiltonHome + "launcher.json";
    const lock = Channel.lookup(module.id);

    return {
        save(state) {
            lock.synchronize(() => {
                fs.writeFile(path, JSON.stringify(state, null, 4));
            });
        },

        load() {
            return lock.synchronize(() => {
                if (fs.exists(path)) {
                    var str = fs.readFile(path);
                    return JSON.parse(str);
                } else {
                    return {};
                }
            });
        }
    };
});
