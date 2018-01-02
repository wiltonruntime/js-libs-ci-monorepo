define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};

require = requireOrig;});
