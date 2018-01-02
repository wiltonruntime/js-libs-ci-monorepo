define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('and', function() {
  it('compares two values with js &&', function() {
    eq(R.and(true, true), true);
    eq(R.and(true, false), false);
    eq(R.and(false, true), false);
    eq(R.and(false, false), false);
  });

  it('is curried', function() {
    var halfTruth = R.and(true);
    eq(halfTruth(false), false);
    eq(halfTruth(true), true);
  });

});

require = requireOrig;});
