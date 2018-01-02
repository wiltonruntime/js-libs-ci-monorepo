define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('propIs', function() {

  it('returns true if the specified object property is of the given type', function() {
    eq(R.propIs(Number, 'value', {value: 1}), true);
  });

  it('returns false otherwise', function() {
    eq(R.propIs(String, 'value', {value: 1}), false);
    eq(R.propIs(String, 'value', {}), false);
  });

});

require = requireOrig;});
