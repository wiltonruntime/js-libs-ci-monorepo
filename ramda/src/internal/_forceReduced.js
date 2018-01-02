define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};

require = requireOrig;});
