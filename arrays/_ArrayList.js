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

define([], function() {
    "use strict";

    var MIN_CAPACITY_INCREMENT = 12;

    function ArrayList(ArrayType, initialCapacity) {
        if ("function" !== typeof(ArrayType) && "object" !== typeof(ArrayType)) {
            throw new Error("Invalid 'ArrayType' parameter specified: [" + ArrayType + "]");
        }
        this.ArrayType = ArrayType;
        this.initialCapacity = MIN_CAPACITY_INCREMENT;
        if("undefined" !== typeof(initialCapacity)) {
            if ("number" !== typeof(initialCapacity)) {
                throw new Error("Invalid 'initialCapacity' parameter specified: [" + initialCapacity + "]");
            }
            this.initialCapacity = initialCapacity;
        }
        this.array = new ArrayType(this.initialCapacity);
        this.length = 0;
    }

    ArrayList.prototype = {

        capacity: function() {
            return this.array.length;
        },

        push: function(el) {
            if (this.length === this.array.length) {
                this._expand();
            }
            this.array[this.length] = el;
            this.length += 1;
        },

        set: function(array, offset) {
            var off = 0;
            if("undefined" !== typeof(offset)) {
                if ("number" !== typeof(offset)) {
                    throw new Error("Invalid 'offset' parameter specified: [" + offset + "]");
                }
                off = offset;
            }
            var reqlen = array.length + off;
            while(reqlen > this.array.length) {
                this._expand();
            }
            this.array.set(array, off);
            if (reqlen > this.length) {
                this.length = reqlen;
            }
        },

        shrinkToFit: function() {
            var arr = this.array;
            this.array = new this.ArrayType(arr.buffer, 0, this.length);
        },

        clear: function() {
            this.array = new this.ArrayType(this.initialCapacity);
            this.length = 0;
        },

        _expand: function() {
            var arr = this.array;
            var inc = Math.round(arr.length / 2);
            if (inc < MIN_CAPACITY_INCREMENT) {
                inc = MIN_CAPACITY_INCREMENT;
            }
            this.array = new this.ArrayType(arr.length + inc);
            this.array.set(arr);
        }
    };

    return ArrayList;
});
