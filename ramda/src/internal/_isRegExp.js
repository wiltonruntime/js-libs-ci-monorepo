define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};

require = requireOrig;});
