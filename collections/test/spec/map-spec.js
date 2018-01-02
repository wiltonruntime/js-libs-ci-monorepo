define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// TODO test insertion order

var Map = require("collections/map");
var describeDict = require("collections/test/spec/dict");
var describeMap = require("collections/test/spec/map");
var describeMapChanges = require("collections/test/spec/listen/map-changes");
var describeToJson = require("collections/test/spec/to-json");
var describe = require("tape-compat");
var it = describe.it;
var expect = describe.expect;

describe("Map-spec", function () {
    describeDict(Map);
    describeMap(Map);
    describeMapChanges(Map);
    describeToJson(Map, [[{a: 1}, 10], [{b: 2}, 20], [{c: 3}, 30]]);
});


require = requireOrig;});
