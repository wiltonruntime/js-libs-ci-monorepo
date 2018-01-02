define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('replace', function() {

  it('replaces substrings of the input string', function() {
    eq(R.replace('1', 'one', '1 two three'), 'one two three');
  });

  it('replaces regex matches of the input string', function() {
    eq(R.replace(/\d+/g, 'num', '1 2 three'), 'num num three');
  });

  it('is curried up to 3 arguments', function() {
    eq(R.replace('').constructor, Function);
    eq(R.replace('', '').constructor, Function);

    var replaceSemicolon = R.replace(';');
    var removeSemicolon = replaceSemicolon('');
    eq(removeSemicolon('return 42;'), 'return 42');
  });

});

require = requireOrig;});
