define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// test setMultiplicity
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var math = require('../../../index');

describe('setMultiplicity', function () {
  it('should return the multiplicity on an element of a set', function () {
    assert.deepEqual(math.setMultiplicity(1, [1, 2]), 1);
    assert.deepEqual(math.setMultiplicity(1, []), 0);
  });

  it('should return the multiplicity on an element of a multiset', function () {
    assert.deepEqual(math.setMultiplicity(1, [1, 1, 2]), 2);
    assert.deepEqual(math.setMultiplicity(1, [1, 2, 1]), 2);
  });
  
  it('should return a number', function() {
	assert.equal(math.typeof(math.setMultiplicity(3, [3, 4, 5])), 'number');
  });

  it('should throw an error in case of invalid number of arguments', function() {
    assert.throws(function () {math.setMultiplicity();}, /TypeError: Too few arguments/);
    assert.throws(function () {math.setMultiplicity(1, [], []);}, /TypeError: Too many arguments/);
  });

  it('should throw an error in case of invalid order of arguments', function() {
    assert.throws(function () {math.setMultiplicity([], 1);}, /TypeError: Unexpected type of argument/);
  });

});

require = requireOrig;});
