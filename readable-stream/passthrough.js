define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = require('readable-stream/readable').PassThrough

require = requireOrig;});
