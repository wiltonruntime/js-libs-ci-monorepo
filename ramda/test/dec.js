define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('dec', function() {

  it('decrements its argument', function() {
    eq(R.dec(-1), -2);
    eq(R.dec(0), -1);
    eq(R.dec(1), 0);
    eq(R.dec(12.34), 11.34);
    eq(R.dec(-Infinity), -Infinity);
    eq(R.dec(Infinity), Infinity);
  });

});

require = requireOrig;});
