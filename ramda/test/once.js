define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('once', function() {
  it('returns a function that calls the supplied function only the first time called', function() {
    var ctr = 0;
    var fn = R.once(function() {ctr += 1;});
    fn();
    eq(ctr, 1);
    fn();
    eq(ctr, 1);
    fn();
    eq(ctr, 1);
  });

  it('passes along arguments supplied', function() {
    var fn = R.once(function(a, b) {return a + b;});
    var result = fn(5, 10);
    eq(result, 15);
  });

  it('retains and returns the first value calculated, even if different arguments are passed later', function() {
    var ctr = 0;
    var fn = R.once(function(a, b) {ctr += 1; return a + b;});
    var result = fn(5, 10);
    eq(result, 15);
    eq(ctr, 1);
    result = fn(20, 30);
    eq(result, 15);
    eq(ctr, 1);
  });

  it('retains arity', function() {
    var f = R.once(function(a, b) { return a + b; });
    eq(f.length, 2);
  });

});

require = requireOrig;});
