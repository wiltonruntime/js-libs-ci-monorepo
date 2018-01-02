define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('sum', function() {
  it('adds together the array of numbers supplied', function() {
    eq(R.sum([1, 2, 3, 4]), 10);
  });

  it('does not save the state of the accumulator', function() {
    eq(R.sum([1, 2, 3, 4]), 10);
    eq(R.sum([1]), 1);
    eq(R.sum([5, 5, 5, 5, 5]), 25);
  });

});

require = requireOrig;});
