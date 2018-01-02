define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('median', function() {

  it('returns middle value of an odd-length list', function() {
    eq(R.median([2]), 2);
    eq(R.median([2, 9, 7]), 7);
  });

  it('returns mean of two middle values of a nonempty even-length list', function() {
    eq(R.median([7, 2]), 4.5);
    eq(R.median([7, 2, 10, 9]), 8);
  });

  it('returns NaN for an empty list', function() {
    eq(R.identical(NaN, R.median([])), true);
  });

  it('handles array-like object', function() {
    eq(R.median((function() { return arguments; })(1, 2, 3)), 2);
  });

});

require = requireOrig;});
