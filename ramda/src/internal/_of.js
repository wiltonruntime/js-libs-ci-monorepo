define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _of(x) { return [x]; };

require = requireOrig;});
