define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('divide', function() {
  it('divides two numbers', function() {
    eq(R.divide(28, 7), 4);
  });

  it('is curried', function() {
    var into28 = R.divide(28);
    eq(into28(7), 4);
  });

  it('behaves right curried when passed `R.__` for its first argument', function() {
    var half = R.divide(R.__, 2);
    eq(half(40), 20);
  });

});

require = requireOrig;});
