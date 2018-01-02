define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

module.exports = (typeof WeakMap !== 'undefined') ? WeakMap : require("weak-map");

require = requireOrig;});
