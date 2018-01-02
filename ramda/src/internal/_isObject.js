define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};

require = requireOrig;});
