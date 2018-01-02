define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('eqBy', function() {

  it('determines whether two values map to the same value in the codomain', function() {
    eq(R.eqBy(Math.abs, 5, 5), true);
    eq(R.eqBy(Math.abs, 5, -5), true);
    eq(R.eqBy(Math.abs, -5, 5), true);
    eq(R.eqBy(Math.abs, -5, -5), true);
    eq(R.eqBy(Math.abs, 42, 99), false);
  });

  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(R.eqBy(R.identity, 0, -0), false);
    eq(R.eqBy(R.identity, -0, 0), false);
    eq(R.eqBy(R.identity, NaN, NaN), true);
    eq(R.eqBy(R.identity, new Just([42]), new Just([42])), true);
  });

});

require = requireOrig;});
