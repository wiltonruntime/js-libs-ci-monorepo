define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");var module = test.QUnit.module;
var moment = require("moment");

module('leap year');

test('leap year', function (assert) {
    assert.equal(moment([2010, 0, 1]).isLeapYear(), false, '2010');
    assert.equal(moment([2100, 0, 1]).isLeapYear(), false, '2100');
    assert.equal(moment([2008, 0, 1]).isLeapYear(), true, '2008');
    assert.equal(moment([2000, 0, 1]).isLeapYear(), true, '2000');
});

require = requireOrig;});
