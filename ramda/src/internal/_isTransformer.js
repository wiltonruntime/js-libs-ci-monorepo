define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

require = requireOrig;});
