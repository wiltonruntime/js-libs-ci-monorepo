define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");var module = test.QUnit.module;
var isArray = require("lodash/isArray");


test('isArray recognizes Array objects', function (assert) {
    assert.ok(isArray([1,2,3]), 'array args');
    assert.ok(isArray([]), 'empty array');
    assert.ok(isArray(new Array(1,2,3)), 'array constructor');
});

test('isArray rejects non-Array objects', function (assert) {
    assert.ok(!isArray(), 'nothing');
    assert.ok(!isArray(undefined), 'undefined');
    assert.ok(!isArray(null), 'null');
    assert.ok(!isArray(123), 'number');
    assert.ok(!isArray('[1,2,3]'), 'string');
    assert.ok(!isArray(new Date()), 'date');
    assert.ok(!isArray({a:1,b:2}), 'object');
});

require = requireOrig;});
