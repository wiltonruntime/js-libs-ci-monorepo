define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var _objectAssign = require('ramda/src/internal/_objectAssign');

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;

require = requireOrig;});
