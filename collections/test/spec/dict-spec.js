define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var Dict = require("collections/dict");
var describeDict = require("collections/test/spec/dict");
var describeToJson = require("collections/test/spec/to-json");
var describe = require("tape-compat");
var it = describe.it;
var expect = describe.expect;

describe("Dict-spec", function () {
    describeDict(Dict);
    describeToJson(Dict, {a: 1, b: 2, c: 3});

    it("should throw errors for non-string keys", function () {
        var dict = Dict();
        expect(function () {
            dict.get(0);
        }).toThrow();
        expect(function () {
            dict.set(0, 10);
        }).toThrow();
        expect(function () {
            dict.has(0);
        }).toThrow();
        expect(function () {
            dict.delete(0);
        }).toThrow();
    });

});


require = requireOrig;});
