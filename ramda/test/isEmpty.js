define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('isEmpty', function() {

  it('returns false for null', function() {
    eq(R.isEmpty(null), false);
  });

  it('returns false for undefined', function() {
    eq(R.isEmpty(undefined), false);
  });

  it('returns true for empty string', function() {
    eq(R.isEmpty(''), true);
    eq(R.isEmpty(' '), false);
  });

  it('returns true for empty array', function() {
    eq(R.isEmpty([]), true);
    eq(R.isEmpty([[]]), false);
  });

  it('returns true for empty object', function() {
    eq(R.isEmpty({}), true);
    eq(R.isEmpty({x: 0}), false);
  });

  it('returns true for empty arguments object', function() {
    eq(R.isEmpty((function() { return arguments; })()), true);
    eq(R.isEmpty((function() { return arguments; })(0)), false);
  });

  it('returns false for every other value', function() {
    eq(R.isEmpty(0), false);
    eq(R.isEmpty(NaN), false);
    eq(R.isEmpty(['']), false);
  });

});

require = requireOrig;});
