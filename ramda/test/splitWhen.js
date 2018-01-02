define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('splitWhen', function() {
  it('splits an array at the first instance to satisfy the predicate', function() {
    eq(R.splitWhen(R.equals(2), [1, 2, 3]), [[1], [2, 3]]);
  });

  it('retains all original elements', function() {
    eq(R.splitWhen(R.T, [1, 1, 1]), [[], [1, 1, 1]]);
  });

  it('is curried', function() {
    var splitWhenFoo = R.splitWhen(R.equals('foo'));
    eq(splitWhenFoo(['foo', 'bar', 'baz']), [[], ['foo', 'bar', 'baz']]);
  });

  it('only splits once', function() {
    eq(R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]), [[1], [2, 3, 1, 2, 3]]);
  });
});

require = requireOrig;});
