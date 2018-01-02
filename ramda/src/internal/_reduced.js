define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

require = requireOrig;});
