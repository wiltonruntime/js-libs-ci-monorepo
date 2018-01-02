define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');


module.exports = function(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(R.toString(actual), R.toString(expected));
};

require = requireOrig;});
