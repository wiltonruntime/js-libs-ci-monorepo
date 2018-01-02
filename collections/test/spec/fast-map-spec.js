define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var FastMap = require("collections/fast-map");
var describeDict = require("collections/test/spec/dict");
var describeMap = require("collections/test/spec/map");
var describeToJson = require("collections/test/spec/to-json");
var describe = require("tape-compat");
var it = describe.it;
var expect = describe.expect;

describe("FastMap-spec", function () {
    describeDict(FastMap);
    describeMap(FastMap);
    describeToJson(FastMap, [[{a: 1}, 10], [{b: 2}, 20], [{c: 3}, 30]]);
});


require = requireOrig;});
