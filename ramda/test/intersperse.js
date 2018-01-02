define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('intersperse', function() {
  it('interposes a separator between list items', function() {
    eq(R.intersperse('n', ['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
    eq(R.intersperse('bar', ['foo']), ['foo']);
    eq(R.intersperse('bar', []), []);
  });

  it('dispatches', function() {
    var obj = {intersperse: function(x) { return 'override ' + x; }};
    eq(R.intersperse('x', obj), 'override x');
  });

  it('is curried', function() {
    eq(R.intersperse('n')(['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
  });

});

require = requireOrig;});
