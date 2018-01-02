define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
export default function merge(obj = { }, defaults) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}

require = requireOrig;});
