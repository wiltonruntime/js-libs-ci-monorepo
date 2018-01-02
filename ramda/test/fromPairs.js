define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('fromPairs', function() {

  it('combines an array of two-element arrays into an object', function() {
    eq(R.fromPairs([['a', 1], ['b', 2], ['c', 3]]), {a: 1, b: 2, c: 3});
  });

  it('gives later entries precedence over earlier ones', function() {
    eq(R.fromPairs([['x', 1], ['x', 2]]), {x: 2});
  });

});

require = requireOrig;});
