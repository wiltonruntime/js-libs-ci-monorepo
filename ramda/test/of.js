define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('of', function() {
  it('returns its argument as an Array', function() {
    eq(R.of(100), [100]);
    eq(R.of([100]), [[100]]);
    eq(R.of(null), [null]);
    eq(R.of(undefined), [undefined]);
    eq(R.of([]), [[]]);
  });

});

require = requireOrig;});
