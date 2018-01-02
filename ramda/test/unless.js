define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;
var _isArrayLike = require('ramda/src/internal/_isArrayLike');


describe('unless', function() {
  it('calls the whenFalse function if the validator returns a falsy value', function() {
    eq(R.unless(_isArrayLike, R.of)(10), [10]);
  });

  it('returns the argument unmodified if the validator returns a truthy value', function() {
    eq(R.unless(_isArrayLike, R.of)([10]), [10]);
  });

  it('returns a curried function', function() {
    eq(R.unless(_isArrayLike)(R.of)(10), [10]);
    eq(R.unless(_isArrayLike)(R.of)([10]), [10]);
  });

});

require = requireOrig;});
