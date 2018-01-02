define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

const hexadecimal = /^[0-9A-F]+$/i;

export default function isHexadecimal(str) {
  assertString(str);
  return hexadecimal.test(str);
}

require = requireOrig;});
