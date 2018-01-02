define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};

require = requireOrig;});
