define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('T', function() {
  it('always returns true', function() {
    eq(R.T(), true);
    eq(R.T(10), true);
    eq(R.T(true), true);
  });

});

require = requireOrig;});
