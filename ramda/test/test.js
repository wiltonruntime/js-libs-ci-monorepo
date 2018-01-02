define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('test', function() {

  it('returns true if string matches pattern', function() {
    eq(R.test(/^x/, 'xyz'), true);
  });

  it('returns false if string does not match pattern', function() {
    eq(R.test(/^y/, 'xyz'), false);
  });

  it('is referentially transparent', function() {
    var pattern = /x/g;
    eq(pattern.lastIndex, 0);
    eq(R.test(pattern, 'xyz'), true);
    eq(pattern.lastIndex, 0);
    eq(R.test(pattern, 'xyz'), true);
  });

  it('throws if first argument is not a regexp', function() {
    assert.throws(
      function() { R.test('foo', 'bar'); },
      function(err) {
        return err.constructor === TypeError &&
               err.message === '‘test’ requires a value of type RegExp ' +
                               'as its first argument; received "foo"';
      }
    );
  });

});

require = requireOrig;});
