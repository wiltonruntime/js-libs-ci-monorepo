define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('mean', function() {

  it('returns mean of a nonempty list', function() {
    eq(R.mean([2]), 2);
    eq(R.mean([2, 7]), 4.5);
    eq(R.mean([2, 7, 9]), 6);
    eq(R.mean([2, 7, 9, 10]), 7);
  });

  it('returns NaN for an empty list', function() {
    eq(R.identical(NaN, R.mean([])), true);
  });

  it('handles array-like object', function() {
    eq(R.mean((function() { return arguments; })(1, 2, 3)), 2);
  });

});

require = requireOrig;});
