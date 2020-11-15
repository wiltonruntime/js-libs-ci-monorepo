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
    return {
        Float32ArrayList: require("arrays/Float32ArrayList"),
        Float64ArrayList: require("arrays/Float64ArrayList"),
        Int16ArrayList: require("arrays/Int16ArrayList"),
        Int32ArrayList: require("arrays/Int32ArrayList"),
        Int8ArrayList: require("arrays/Int8ArrayList"),
        StringBuilder: require("arrays/StringBuilder"),
        Uint16ArrayList: require("arrays/Uint16ArrayList"),
        Uint32ArrayList: require("arrays/Uint32ArrayList"),
        Uint8ArrayList: require("arrays/Uint8ArrayList"),
        Uint8ClampedArrayList: require("arrays/Uint8ClampedArrayList")
    };
});
