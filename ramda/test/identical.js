define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('identical', function() {
  var a = [];
  var b = a;
  it('has Object.is semantics', function() {
    eq(R.identical(100, 100), true);
    eq(R.identical(100, '100'), false);
    eq(R.identical('string', 'string'), true);
    eq(R.identical([], []), false);
    eq(R.identical(a, b), true);
    eq(R.identical(undefined, undefined), true);
    eq(R.identical(null, undefined), false);

    eq(R.identical(-0, 0), false);
    eq(R.identical(0, -0), false);
    eq(R.identical(NaN, NaN), true);

    eq(R.identical(NaN, 42), false);
    eq(R.identical(42, NaN), false);

    eq(R.identical(0, new Number(0)), false);
    eq(R.identical(new Number(0), 0), false);
    eq(R.identical(new Number(0), new Number(0)), false);
  });

  it('is curried', function() {
    var isA = R.identical(a);
    eq(isA([]), false);
  });

});

require = requireOrig;});
