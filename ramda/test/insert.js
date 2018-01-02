define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('insert', function() {
  it('inserts an element into the given list', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    eq(R.insert(2, 'x', list), ['a', 'b', 'x', 'c', 'd', 'e']);
  });

  it('inserts another list as an element', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    eq(R.insert(2, ['s', 't'], list), ['a', 'b', ['s', 't'], 'c', 'd', 'e']);
  });

  it('appends to the end of the list if the index is too large', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    eq(R.insert(8, 'z', list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });

  it('is curried', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    eq(R.insert(8)('z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
    eq(R.insert(8, 'z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });

});

require = requireOrig;});
