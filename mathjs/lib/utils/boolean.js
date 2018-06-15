define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

/**
 * Test whether value is a boolean
 * @param {*} value
 * @return {boolean} isBoolean
 */
exports.isBoolean = function(value) {
  return typeof value == 'boolean';
};

require = requireOrig;});
