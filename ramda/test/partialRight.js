define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('partialRight', function() {
  var disc = function(a, b, c) { // note disc(3, 7, 4) => 1
    return b * b - 4 * a * c;
  };

  it('caches the initially supplied arguments', function() {
    var f = R.partialRight(disc, [4]);
    eq(f(3, 7), 1);
    var g = R.partialRight(disc, [7, 4]);
    eq(g(3), 1);
  });

  it('correctly reports the arity of the new function', function() {
    var f = R.partialRight(disc, [4]);
    eq(f.length, 2);
    var g = R.partialRight(disc, [7, 4]);
    eq(g.length, 1);
  });

});

require = requireOrig;});
