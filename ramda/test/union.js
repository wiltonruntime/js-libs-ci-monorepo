define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('union', function() {
  var M = [1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  it('combines two lists into the set of all their elements', function() {
    eq(R.union(M, N), [1, 2, 3, 4, 5, 6]);
  });

  it('is curried', function() {
    eq(typeof R.union(M), 'function');
    eq(R.union(M)(N), [1, 2, 3, 4, 5, 6]);
  });

  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    //eq(R.union([0], [-0]).length, 2);
    //eq(R.union([-0], [0]).length, 2);
    eq(R.union([NaN], [NaN]).length, 1);
    eq(R.union([new Just([42])], [new Just([42])]).length, 1);
  });

});

require = requireOrig;});
