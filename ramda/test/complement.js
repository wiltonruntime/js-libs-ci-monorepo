define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var S = require('sanctuary');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('complement', function() {
  it('creates boolean-returning function that reverses another', function() {
    var even = function(x) {return x % 2 === 0;};
    var f = R.complement(even);
    eq(f(8), false);
    eq(f(13), true);
  });

  it('accepts a function that take multiple parameters', function() {
    var between = function(a, b, c) {return a < b && b < c;};
    var f = R.complement(between);
    eq(f(4, 5, 11), false);
    eq(f(12, 2, 6), true);
  });

  it('accepts fantasy-land functors', function() {
    var Just = S.Just;
    var Nothing = function() {
        return S.Nothing;
    };
    eq(R.complement(Just(true)), Just(false));
    eq(R.complement(Just(false)), Just(true));
    eq(R.complement(Nothing()), Nothing());
  });

});

require = requireOrig;});
