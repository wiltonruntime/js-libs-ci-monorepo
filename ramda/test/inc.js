define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('inc', function() {

  it('increments its argument', function() {
    eq(R.inc(-1), 0);
    eq(R.inc(0), 1);
    eq(R.inc(1), 2);
    eq(R.inc(12.34), 13.34);
    eq(R.inc(-Infinity), -Infinity);
    eq(R.inc(Infinity), Infinity);
  });

});

require = requireOrig;});
