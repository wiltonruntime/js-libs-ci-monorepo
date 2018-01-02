define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};

require = requireOrig;});
