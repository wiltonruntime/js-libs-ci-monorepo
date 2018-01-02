define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require("assert"),
    boolbase = require("boolbase");

assert.strictEqual(boolbase.trueFunc(), true, "should evaluate to true");
assert.strictEqual(boolbase.falseFunc(), false, "should evaluate to false");

require = requireOrig;});
