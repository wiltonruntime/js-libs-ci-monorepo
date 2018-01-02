define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

// used exclusively to generate collections.min.js for browsers

var Shim = require("collections/shim");

exports.List = require("collections/list");
exports.Set = require("collections/set");
exports.Map = require("collections/map");
exports.MultiMap = require("collections/multi-map");
exports.WeakMap = require("collections/weak-map");
exports.SortedSet = require("collections/sorted-set");
exports.SortedMap = require("collections/sorted-map");
exports.LruSet = require("collections/lru-set");
exports.LruMap = require("collections/lru-map");
exports.SortedArray = require("collections/sorted-array");
exports.SortedArraySet = require("collections/sorted-array-set");
exports.SortedArrayMap = require("collections/sorted-array-map");
exports.FastSet = require("collections/fast-set");
exports.FastMap = require("collections/fast-map");
exports.Dict = require("collections/dict");
exports.Iterator = require("collections/iterator");


require = requireOrig;});
