define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var SortedArrayMap = require("collections/sorted-array-map");
var describeDict = require("collections/test/spec/dict");
var describeMap = require("collections/test/spec/map");
var describeMapChanges = require("collections/test/spec/listen/map-changes");
var describeToJson = require("collections/test/spec/to-json");
var describe = require("tape-compat");
var it = describe.it;
var expect = describe.expect;

describe("SortedArrayMap-spec", function () {
    describeDict(SortedArrayMap);
    describeMap(SortedArrayMap, [1, 2, 3]);
    describeMapChanges(SortedArrayMap);
    describeToJson(SortedArrayMap, [[1, 10], [2, 20], [3, 30]]);
});


require = requireOrig;});
