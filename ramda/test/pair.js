define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('pair', function() {

  it('creates a two-element array', function() {
    eq(R.pair('foo', 'bar'), ['foo', 'bar']);
    eq(R.pair('foo')('bar'), ['foo', 'bar']);
  });

});

require = requireOrig;});
