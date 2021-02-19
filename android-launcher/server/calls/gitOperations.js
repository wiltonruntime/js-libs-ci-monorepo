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
    "buffer",
    "lodash/isObject",
    "wilton/fs",
    "wilton/git",
    "wilton/Logger",
    "wilton/misc",
    "wilton/utils"
], (module, buffer, isObject, fs, git, Logger, { wiltonConfig }, utils) => {
    var logger = new Logger(module.id);

    function prepareAppsDir(fetchType) {
        const base = wiltonConfig().wiltonHome;
        //const base = "/home/alex/projects/wilton_other/tmp/";
        var dir = "application" === fetchType ? base + "apps/" : base + "libs/";
        if (!fs.exists(dir)) {
            fs.mkdir(dir);
        }
        return dir;
    }

    function validateDest(destination) {
        if (!/[A-Za-z0-9_\-]/.test(destination)) {
            throw new Error(`Invalid destination directory specified, value: [${destination}]`);
        }
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
        cloneOrPull(opts) {
            utils.checkProperties(opts, ["fetchType", "gitUrl", "destination", "username", "password", "gitBranch"]);
            const dir = prepareAppsDir(opts.fetchType);
            validateDest(opts.destination);
            var repoPath = dir + opts.destination + "/";
            var pwd = buffer.Buffer.from(opts.password, "base64").toString("utf8");

            if (!fs.exists(repoPath)) {
                logger.info("Cloning Git repository on url: [" + opts.url + "] ...");
                git.clone(opts.gitUrl, repoPath, prepareOpts(opts.username, pwd, opts.gitBranch));
                logger.info("Clone perfomed successfully");
            } else {
                logger.info("Pulling Git repository on url: [" + opts.gitUrl + "] ...");
                git.pull(repoPath, prepareOpts(opts.username, pwd, opts.gitBranch));
                logger.info("Pull perfomed successfully");
            }
        }
    };
});
