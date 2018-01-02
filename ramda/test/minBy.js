define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('minBy', function() {

  it('returns the smaller value as determined by the function', function() {
    eq(R.minBy(function(n) { return n * n; }, -3, 2), 2);
    eq(R.minBy(R.prop('x'), {x: 3, y: 1}, {x: 5, y: 10}), {x: 3, y: 1});
  });

});

require = requireOrig;});
