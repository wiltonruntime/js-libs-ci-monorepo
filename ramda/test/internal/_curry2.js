define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;
var _ = require('ramda/src/__');
var _curry2 = require('ramda/src/internal/_curry2');


describe('_curry2', function() {
  it('supports R.__ placeholder', function() {
    var f = function(a, b) { return [a, b]; };
    var g = _curry2(f);

    eq(g(1)(2), [1, 2]);
    eq(g(1, 2), [1, 2]);

    eq(g(_, 2)(1), [1, 2]);
    eq(g(1, _)(2), [1, 2]);

    eq(g(_, _)(1)(2), [1, 2]);
    eq(g(_, _)(1, 2), [1, 2]);
    eq(g(_, _)(_)(1, 2), [1, 2]);
    eq(g(_, _)(_, 2)(1), [1, 2]);
  });
});

require = requireOrig;});
