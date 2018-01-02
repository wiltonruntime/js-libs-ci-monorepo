define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;

var isOdd = function(_, x) {return x % 2 === 1; };

describe('reduceWhile', function() {
  it('reduces until its predicate fails', function() {
    eq(R.reduceWhile(isOdd, R.add, 0, [1, 3, 1, 5, 20, 7, 7, 7]), 10);
  });

  it('returns its accumulator when given an empty array', function() {
    eq(R.reduceWhile(isOdd, R.add, 101, []), 101);
  });

  it('is curried', function() {
    var reduceWhileOdd = R.reduceWhile(isOdd);
    eq(reduceWhileOdd(R.add, 101, []), 101);
    eq(reduceWhileOdd(R.add, 0, [1, 2, 3, 4]), 1);
  });

  it('correctly reports the arity of curried versions', function() {
    var reduceWhileOdd = R.reduceWhile(isOdd);
    eq(reduceWhileOdd.length, 3);
  });
});

require = requireOrig;});
