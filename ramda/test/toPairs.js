define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('toPairs', function() {
  it('converts an object into an array of two-element [key, value] arrays', function() {
    eq(R.toPairs({a: 1, b: 2, c: 3}), [['a', 1], ['b', 2], ['c', 3]]);
  });

  it("only iterates the object's own properties", function() {
    var F = function() {
      this.x = 1;
      this.y = 2;
    };
    F.prototype.protoProp = 'you can\'t see me';
    var f = new F();
    eq(R.toPairs(f), [['x', 1], ['y', 2]]);
  });

});

require = requireOrig;});
