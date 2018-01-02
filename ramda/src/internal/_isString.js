define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};

require = requireOrig;});
