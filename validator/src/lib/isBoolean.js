define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function isBoolean(str) {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}

require = requireOrig;});
