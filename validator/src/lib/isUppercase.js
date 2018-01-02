define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function isUppercase(str) {
  assertString(str);
  return str === str.toUpperCase();
}

require = requireOrig;});
