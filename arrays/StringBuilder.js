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

define([
    "typedarray",
    "./Uint16ArrayList"
], function(typedarray, Uint16ArrayList) {
    "use strict";

    var UINT16_ARRAY = "undefined" !== typeof(Uint16Array) ? Uint16Array : typedarray.Uint16Array;

    function StringBuilder(initialCapacity) {
        this.arrayList = new Uint16ArrayList(initialCapacity);
        this.length = 0;
    }

    StringBuilder.prototype = {
        capacity: function() {
            return this.arrayList.array.length;
        },

        push: function(str) {
            if ("string" === typeof(str)) {
                var len = str.length;
                for (var i = 0; i < len; i++) {
                    this.arrayList.push(str.charCodeAt(i));
                }
                this.length += len;
            } else {
                throw new Error("Invalid non-string argument specified");
            }
        },

        pushCharCode: function(code) {
            if ("number" === typeof(code)) {
                this.arrayList.push(code);
                this.length += 1;
            } else {
                throw new Error("Invalid non-number argument specified");
            }
        },

        set: function(sb, offset) {
            if ("object" === typeof(sb.arrayList)) {
                this.arrayList.set(sb.arrayList.array, offset);
                this.length = this.arrayList.length;
            } else {
                throw new Error("Invalid non-SB argument specified");
            }
        },

        shrinkToFit: function() {
            this.arrayList.shrinkToFit();
        },

        clear: function() {
            this.arrayList.clear();
            this.length = 0;
        },

        _toStringBatched: function() {
            var step = 4096;
            var buf = this.arrayList.array.buffer;
            var list = [];
            for (var i = 0; i < this.length; i += step) {
                var nextIdx = i + step;
                var stepCur = nextIdx < this.length ? step : this.length - i;
                var arr = new UINT16_ARRAY(buf, (i*2), stepCur);
                var chunk = String.fromCharCode.apply(null, arr);
                list.push(chunk);
            }
            return list.join("");
        },
        
        _toStringNaive: function() {
            var step = 4096;
            var list = [];
            for (var i = 0; i < this.length; i++) {
                list.push(String.fromCharCode(this.arrayList.array[i]));
                if (0 === i % step) {
                    list = [list.join("")];
                }
            }
            return list.join("");
        }
    };

    // check formCharCode accepts array-like args
    try {
        String.fromCharCode.apply(null, new UINT16_ARRAY(2));
        StringBuilder.prototype.toString = StringBuilder.prototype._toStringBatched;
    } catch (e) {
        StringBuilder.prototype.toString = StringBuilder.prototype._toStringNaive;
    }

    return StringBuilder;
});
