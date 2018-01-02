define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};

require = requireOrig;});
