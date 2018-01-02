define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('pickAll', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
  it('copies the named properties of an object to the new object', function() {
    eq(R.pickAll(['a', 'c', 'f'], obj), {a: 1, c: 3, f: 6});
  });

  it('includes properties not present on the input object', function() {
    eq(R.pickAll(['a', 'c', 'g'], obj), {a: 1, c: 3, g: undefined});
  });

  it('is curried', function() {
    var copyAB = R.pickAll(['a', 'b']);
    eq(copyAB(obj), {a: 1, b: 2});
  });

});

require = requireOrig;});
