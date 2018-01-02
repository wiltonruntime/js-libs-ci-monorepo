define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
export default function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}

require = requireOrig;});
