define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('tap', function() {
  it('returns a function that always returns its argument', function() {
    var f = R.tap(R.identity);
    eq(typeof f, 'function');
    eq(f(100), 100);
  });

  it("may take a function as the first argument that executes with tap's argument", function() {
    var sideEffect = 0;
    eq(sideEffect, 0);
    var rv = R.tap(function(x) { sideEffect = 'string ' + x; }, 200);
    eq(rv, 200);
    eq(sideEffect, 'string 200');
  });

});

require = requireOrig;});
