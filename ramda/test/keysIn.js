define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('keysIn', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it("returns an array of the given object's keys", function() {
    eq(R.keysIn(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it("includes the given object's prototype properties", function() {
    eq(R.keysIn(cobj).sort(), ['a', 'b', 'x', 'y']);
  });

  it('works for primitives', function() {
    var result = R.map(function(val) {
      return R.keys(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    eq(result, R.repeat([], 10));
  });

});

require = requireOrig;});
