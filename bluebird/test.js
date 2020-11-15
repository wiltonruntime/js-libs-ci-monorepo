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

define(["bluebird", "assert"], function(Promise, assert) {
    function guess(variant) {
        if (42 === variant) {
            return Promise.resolve(42);
        } else {
            return Promise.reject(new Error(variant));
        }
    }

    function attempt(variant) {
        return guess(variant).then(function(result) {
            return "success: " + result;
        }, function(err) {
            return "fail: " + err;
        }).value();
    }

    console.log("test: bluebird sanity");
    assert.equal(attempt(41), "fail: Error: 41");
    assert.equal(attempt(42), "success: 42");
    assert.equal(attempt(43), "fail: Error: 43");
    
    return {
        main: function() {
        }
    };
});

