define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var typed = require('typed-function');

describe('union types', function () {

  it('should create a typed function with union types', function() {
    var fn = typed({
      'number | boolean': function (arg) {
        return typeof arg;
      }
    });

    assert.equal(fn(true), 'boolean');
    assert.equal(fn(2), 'number');
    assert.throws(function () {fn('string')}, /TypeError: Unexpected type of argument in function unnamed \(expected: number or boolean, actual: string, index: 0\)/);
  });

});

require = requireOrig;});
