define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var Shim = require("collections/shim");
var SortedArraySet = require("collections/sorted-array-set");
var GenericCollection = require("collections/generic-collection");
var GenericMap = require("collections/generic-map");
var PropertyChanges = require("collections/listen/property-changes");
var MapChanges = require("collections/listen/map-changes");

module.exports = SortedArrayMap;

function SortedArrayMap(values, equals, compare, getDefault) {
    if (!(this instanceof SortedArrayMap)) {
        return new SortedArrayMap(values, equals, compare, getDefault);
    }
    equals = equals || Object.equals;
    compare = compare || Object.compare;
    getDefault = getDefault || Function.noop;
    this.contentEquals = equals;
    this.contentCompare = compare;
    this.getDefault = getDefault;
    this.store = new SortedArraySet(
        null,
        function keysEqual(a, b) {
            return equals(a.key, b.key);
        },
        function compareKeys(a, b) {
            return compare(a.key, b.key);
        }
    );
    this.length = 0;
    this.addEach(values);
}

// hack so require("sorted-array-map").SortedArrayMap will work in MontageJS
SortedArrayMap.SortedArrayMap = SortedArrayMap;

Object.addEach(SortedArrayMap.prototype, GenericCollection.prototype);
Object.addEach(SortedArrayMap.prototype, GenericMap.prototype);
Object.addEach(SortedArrayMap.prototype, PropertyChanges.prototype);
Object.addEach(SortedArrayMap.prototype, MapChanges.prototype);

SortedArrayMap.from = GenericCollection.from;

SortedArrayMap.prototype.isSorted = true;

SortedArrayMap.prototype.constructClone = function (values) {
    return new this.constructor(
        values,
        this.contentEquals,
        this.contentCompare,
        this.getDefault
    );
};

require = requireOrig;});
