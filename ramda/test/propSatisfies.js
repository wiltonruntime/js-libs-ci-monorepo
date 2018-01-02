define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('propSatisfies', function() {

  var isPositive = function(n) { return n > 0; };

  it('returns true if the specified object property satisfies the given predicate', function() {
    eq(R.propSatisfies(isPositive, 'x', {x: 1, y: 0}), true);
  });

  it('returns false otherwise', function() {
    eq(R.propSatisfies(isPositive, 'y', {x: 1, y: 0}), false);
  });

});

require = requireOrig;});
