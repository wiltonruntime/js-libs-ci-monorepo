define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");var module = test.QUnit.module;
var moment = require("moment");

module('days in year');

// https://github.com/moment/moment/issues/3717
test('YYYYDDD should not parse DDD=000', function (assert) {
    assert.equal(moment(7000000, moment.ISO_8601, true).isValid(), false);
    assert.equal(moment('7000000', moment.ISO_8601, true).isValid(), false);
    assert.equal(moment(7000000, moment.ISO_8601, false).isValid(), false);
});

require = requireOrig;});
