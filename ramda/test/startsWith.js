define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;

describe('startsWith', function() {
  it('should return true when a string starts with the provided value', function() {
    eq(R.startsWith('a', 'abc'), true);
  });

  it('should return true when a long string starts with the provided value', function() {
    eq(R.startsWith('astro', 'astrology'), true);
  });

  it('should return false when a string does not start with the provided value', function() {
    eq(R.startsWith('b', 'abc'), false);
  });

  it('should return false when a long string does not start with the provided value', function() {
    eq(R.startsWith('stro', 'astrology'), false);
  });

  it('should return true when an array starts with the provided value', function() {
    eq(R.startsWith(['a'], ['a', 'b', 'c']), true);
  });

  it('should return true when an array starts with the provided values', function() {
    eq(R.startsWith(['a', 'b'], ['a', 'b', 'c']), true);
  });

  it('should return false when an array does not start with the provided value', function() {
    eq(R.startsWith(['b'], ['a', 'b', 'c']), false);
  });

  it('should return false when an array does not start with the provided values', function() {
    eq(R.startsWith(['b', 'c'], ['a', 'b', 'c']), false);
  });
});

require = requireOrig;});
