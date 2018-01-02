define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function isBuffer(arg) {
  return arg instanceof Buffer;
}

require = requireOrig;});
