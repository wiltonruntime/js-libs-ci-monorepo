/*
 * Copyright 2018, alex at staticlibs.net
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

define(function(require) {
    "use strict";

    print("text: arrays");

    var assert = require("assert");
    var StringBuilder = require("arrays/StringBuilder");

    // StringBuilder, ArrayList is tested underneath

    var sb = new StringBuilder();
    assert.equal(sb.length, 0);
    assert.equal(sb.capacity(), 12);
    assert.equal(sb.toString(), "");

    var sb = new StringBuilder(2);
    assert.equal(sb.length, 0);
    assert.equal(sb.capacity(), 2);
    assert.equal(sb.toString(), "");

    sb.push("foo");
    assert.equal(sb.length, 3);
    assert.equal(sb.toString(), "foo");

    sb.clear();
    assert.equal(sb.length, 0);
    assert.equal(sb.capacity(), 2);
    assert.equal(sb.toString(), "");

    sb.push("привет");
    assert.equal(sb.length, 6);
    assert.equal(sb.toString(), "привет");

    sb.clear();
    var num = 0;
    var arr = [];
    for (var i = 0; i < (1<<14); i++) {
        var numst = String(num++);
        arr.push(numst);
        sb.push(numst);
    }
    var checker = arr.join("");
    assert.equal(checker.length, sb.length);
    assert.equal(checker, sb.toString());

    sb.clear();
    sb.push(checker);
    assert.equal(checker.length, sb.length);
    assert.equal(checker, sb.toString());

    sb.clear();
    sb.pushCharCode("а".charCodeAt(0));
    sb.pushCharCode("б".charCodeAt(0));
    sb.pushCharCode("в".charCodeAt(0));
    assert.equal(sb.length, 3);
    assert.equal(sb.toString(), "абв");

    sb.shrinkToFit();
    assert.equal(sb.length, 3);
    assert.equal(sb.toString(), "абв");
    assert.equal(sb.capacity(), 3);

    var sb2 = new StringBuilder(7);
    sb2.push("foobar");
    assert.equal(sb2.length, 6);
    assert.equal(sb2.toString(), "foobar");
    assert.equal(sb2.capacity(), 7);
    sb.set(sb2, 2);
    assert.equal(sb2.length, 6);
    assert.equal(sb2.toString(), "foobar");
    assert.equal(sb2.capacity(), 7);
    assert.equal(sb.length, 9);
    assert.equal(sb.toString(), "абfoobar\0");

    // ArrayList

    // typed arrays

    var f32 = new require("arrays/Float32ArrayList")(42);
    assert.equal(0, f32.length);
    assert.equal(42, f32.capacity());

    var f64 = new require("arrays/Float64ArrayList")(42);
    assert.equal(0, f64.length);
    assert.equal(42, f64.capacity());

    var i16 = new require("arrays/Int16ArrayList")(42);
    assert.equal(0, i16.length);
    assert.equal(42, i16.capacity());

    var i32 = new require("arrays/Int32ArrayList")(42);
    assert.equal(0, i32.length);
    assert.equal(42, i32.capacity());

    var i8 = new require("arrays/Int8ArrayList")(42);
    assert.equal(0, i8.length);
    assert.equal(42, i8.capacity());

    var u16 = new require("arrays/Uint16ArrayList")(42);
    assert.equal(0, u16.length);
    assert.equal(42, u16.capacity());

    var u32 = new require("arrays/Uint32ArrayList")(42);
    assert.equal(0, u32.length);
    assert.equal(42, u32.capacity());

    var u8 = new require("arrays/Uint8ArrayList")(42);
    assert.equal(0, u8.length);
    assert.equal(42, u8.capacity());

    var u8c = new require("arrays/Uint8ClampedArrayList")(42);
    assert.equal(0, u8c.length);
    assert.equal(42, u8c.capacity());

    return {
        main: function() {
            // no-op
        }
    };
});
