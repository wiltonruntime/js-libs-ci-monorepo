define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('nth', function() {

  var list = ['foo', 'bar', 'baz', 'quux'];

  it('accepts positive offsets', function() {
    eq(R.nth(0, list), 'foo');
    eq(R.nth(1, list), 'bar');
    eq(R.nth(2, list), 'baz');
    eq(R.nth(3, list), 'quux');
    eq(R.nth(4, list), undefined);

    eq(R.nth(0, 'abc'), 'a');
    eq(R.nth(1, 'abc'), 'b');
    eq(R.nth(2, 'abc'), 'c');
    eq(R.nth(3, 'abc'), '');
  });

  it('accepts negative offsets', function() {
    eq(R.nth(-1, list), 'quux');
    eq(R.nth(-2, list), 'baz');
    eq(R.nth(-3, list), 'bar');
    eq(R.nth(-4, list), 'foo');
    eq(R.nth(-5, list), undefined);

    eq(R.nth(-1, 'abc'), 'c');
    eq(R.nth(-2, 'abc'), 'b');
    eq(R.nth(-3, 'abc'), 'a');
    eq(R.nth(-4, 'abc'), '');
  });

  it('throws if applied to null or undefined', function() {
    assert.throws(function() { R.nth(0, null); }, TypeError);
    assert.throws(function() { R.nth(0, undefined); }, TypeError);
  });

});

require = requireOrig;});
