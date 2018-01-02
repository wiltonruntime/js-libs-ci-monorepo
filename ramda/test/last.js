define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('last', function() {

  it('returns the first element of an ordered collection', function() {
    eq(R.last([1, 2, 3]), 3);
    eq(R.last([1, 2]), 2);
    eq(R.last([1]), 1);
    eq(R.last([]), undefined);

    eq(R.last('abc'), 'c');
    eq(R.last('ab'), 'b');
    eq(R.last('a'), 'a');
    eq(R.last(''), '');
  });

  it('throws if applied to null or undefined', function() {
    assert.throws(function() { R.last(null); }, TypeError);
    assert.throws(function() { R.last(undefined); }, TypeError);
  });

});

require = requireOrig;});
