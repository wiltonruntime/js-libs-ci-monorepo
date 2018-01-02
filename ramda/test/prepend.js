define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('prepend', function() {
  it('adds the element to the beginning of the list', function() {
    eq(R.prepend('x', ['y', 'z']), ['x', 'y', 'z']);
    eq(R.prepend(['a', 'z'], ['x', 'y']), [['a', 'z'], 'x', 'y']);
  });

  it('works on empty list', function() {
    eq(R.prepend(1, []), [1]);
  });

  it('is curried', function() {
    eq(typeof R.prepend(4), 'function');
    eq(R.prepend(4)([3, 2, 1]), [4, 3, 2, 1]);
  });

});

require = requireOrig;});
