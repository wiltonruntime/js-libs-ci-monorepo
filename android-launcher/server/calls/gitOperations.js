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
    "wilton/misc",
    "wilton/utils"
], function(module, buffer, isObject, fs, git, Logger, misc, utils) {
    "use strict";
    var logger = new Logger(module.id);

    function prepareAppsDir() {
        var appsDir = misc.wiltonConfig().wiltonHome + "apps/";
        if (!fs.exists(appsDir)) {
            fs.mkdir(appsDir);
        }
        return appsDir;
    }

    function prepareOpts(username, password, branch) {
        var res = {
            branch: branch
        };
        if (username.length > 0) {
            res.username = username;
        }
        if (password.length > 0) {
            res.password = password;
        }
        return res;
    }

    return {
        cloneOrPull: function(opts) {
            utils.checkProperties(opts, ["gitUrl", "username", "password", "gitBranch", "skipUpdate", "deleteApp"]);
            var appsDir = prepareAppsDir();
            var parts = opts.gitUrl.split("/");
            var name = parts[parts.length - 1].replace(/\.git$/, "");
            var repoPath = appsDir + name + "/";
            var pwd = buffer.Buffer.from(opts.password, "base64").toString("utf8");

            if (!fs.exists(repoPath)) {
                logger.info("Cloning Git repository on url: [" + opts.url + "] ...");
                git.clone(opts.gitUrl, repoPath, prepareOpts(opts.username, pwd, opts.gitBranch));
                logger.info("Clone perfomed successfully");
            } else if (!opts.skipUpdate) {
                if (opts.deleteApp) {
                    fs.rmdir(repoPath);
                    logger.info("Cloning fresh Git repository on url: [" + opts.url + "] ...");
                    git.clone(opts.gitUrl, repoPath, prepareOpts(opts.username, pwd, opts.gitBranch));
                    logger.info("Clone perfomed successfully");
                } else {
                    logger.info("Pulling Git repository on url: [" + opts.gitUrl + "] ...");
                    git.pull(repoPath, prepareOpts(opts.username, pwd, opts.gitBranch));
                    logger.info("Pull perfomed successfully");
                }
            } else {
                // git update skipped
            }

            var confFile = repoPath + "conf/config.json";
            var confStr = fs.readFile(confFile);
            var ac = JSON.parse(confStr);
            var lopts = ac.launcher;
            if (!isObject(lopts)) {
                throw new Error("Cannot load launcher options from app config," +
                        " url: [" + opts.gitUrl + "]");
            }

            return {
                repoPath: repoPath,
                options: lopts
            };
        }
    };
});
