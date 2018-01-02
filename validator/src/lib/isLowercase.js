define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function isLowercase(str) {
  assertString(str);
  return str === str.toLowerCase();
}

require = requireOrig;});
