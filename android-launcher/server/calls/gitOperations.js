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
    "lodash/isObject",
    "wilton/fs",
    "wilton/git",
    "wilton/Logger",
    "wilton/misc"
], function(module, buffer, isObject, fs, git, Logger, misc) {
    "use strict";
    var logger = new Logger(module.id);

    function prepareAppsDir() {
        var appsDir = misc.wiltonConfig().wiltonHome + "apps/";
        if (!fs.exists(appsDir)) {
            fs.mkdir(appsDir);
        }
        return appsDir;
    }

    return {
        cloneOrPull: function(url, username, password, branch) {
            var appsDir = prepareAppsDir();
            var parts = url.split("/");
            var name = parts[parts.length - 1].replace(/\.git$/, "");
            var repoPath = appsDir + name + "/";

            if (!fs.exists(repoPath)) {
                logger.info("Cloning Git repository on url: [" + url + "] ...");
                git.clone(url, repoPath, {
                    username: username,
                    password: Buffer.from(password, "base64").toString("utf8"),
                    branch: branch
                });
                logger.info("Clone perfomed successfully");
            } else {
                logger.info("Pulling Git repository on url: [" + url + "] ...");
                git.pull(repoPath, {
                    username: username,
                    password: buffer.Buffer.from(password, "base64").toString("utf8"),
                    branch: branch
                });
                logger.info("Pull perfomed successfully");
            }

            var confFile = repoPath + "conf/config.json";
            var confStr = fs.readFile(confFile);
            var ac = JSON.parse(confStr);
            var lopts = ac.launcher;
            if (!isObject(lopts)) {
                throw new Error("Cannot load launcher options from app config," +
                        " url: [" + url + "]");
            }

            return {
                repoPath: repoPath,
                options: lopts
            };
        }
    };
});
