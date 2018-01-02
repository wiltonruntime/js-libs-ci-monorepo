define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

require = requireOrig;});
