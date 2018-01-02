define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('or', function() {
  it('compares two values with js ||', function() {
    eq(R.or(true, true), true);
    eq(R.or(true, false), true);
    eq(R.or(false, true), true);
    eq(R.or(false, false), false);
  });

  it('is curried', function() {
    eq(R.or(false)(false), false);
    eq(R.or(false)(true), true);
  });

});

require = requireOrig;});
