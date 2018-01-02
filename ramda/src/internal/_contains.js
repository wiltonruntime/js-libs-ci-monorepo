define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var _indexOf = require('ramda/src/internal/_indexOf');


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};

require = requireOrig;});
