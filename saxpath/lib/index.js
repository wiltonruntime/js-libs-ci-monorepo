define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports.SaXPath = require('saxpath/lib/saxpath');

require = requireOrig;});
