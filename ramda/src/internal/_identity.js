define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _identity(x) { return x; };

require = requireOrig;});
