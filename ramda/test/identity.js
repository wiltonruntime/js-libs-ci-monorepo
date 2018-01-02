define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('identity', function() {
  it('returns its first argument', function() {
    eq(R.identity(undefined), undefined);
    eq(R.identity('foo'), 'foo');
    eq(R.identity('foo', 'bar'), 'foo');
  });

  it('has length 1', function() {
    eq(R.identity.length, 1);
  });

});

require = requireOrig;});
