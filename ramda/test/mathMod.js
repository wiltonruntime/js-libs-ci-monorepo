define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('mathMod', function() {
  it('requires integer arguments', function() {
    assert.notStrictEqual(R.mathMod('s', 3), R.mathMod('s', 3));
    assert.notStrictEqual(R.mathMod(3, 's'), R.mathMod(3, 's'));
    assert.notStrictEqual(R.mathMod(12.2, 3), R.mathMod(12.2, 3));
    assert.notStrictEqual(R.mathMod(3, 12.2), R.mathMod(3, 12.2));
  });

  it('behaves differently than JS modulo', function() {
    assert.notStrictEqual(R.mathMod(-17, 5), -17 % 5);
    assert.notStrictEqual(R.mathMod(17.2, 5), 17.2 % 5);
    assert.notStrictEqual(R.mathMod(17, -5), 17 % -5);
  });

  it('computes the true modulo function', function() {
    eq(R.mathMod(-17, 5), 3);
    eq(R.identical(NaN, R.mathMod(17, -5)), true);
    eq(R.identical(NaN, R.mathMod(17, 0)), true);
    eq(R.identical(NaN, R.mathMod(17.2, 5)), true);
    eq(R.identical(NaN, R.mathMod(17, 5.5)), true);
  });

  it('is curried', function() {
    var f = R.mathMod(29);
    eq(f(6), 5);
  });


  it('behaves right curried when passed `R.__` for its first argument', function() {
    var mod5 = R.modulo(R.__, 5);
    eq(mod5(12), 2);
    eq(mod5(8), 3);
  });

});

require = requireOrig;});
