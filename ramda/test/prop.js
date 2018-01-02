define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('prop', function() {
  var fred = {name: 'Fred', age: 23};

  it('returns a function that fetches the appropriate property', function() {
    var nm = R.prop('name');
    eq(typeof nm, 'function');
    eq(nm(fred), 'Fred');
  });

});

require = requireOrig;});
