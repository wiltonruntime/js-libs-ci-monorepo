define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
/**
 * Test whether a value is a BigNumber
 * @param {*} x
 * @return {boolean}
 */
module.exports = function isBigNumber(x) {
  return x && x.constructor.prototype.isBigNumber || false
}

require = requireOrig;});
