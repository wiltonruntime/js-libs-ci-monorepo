define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = require('saxpath/lib/index');

require = requireOrig;});
