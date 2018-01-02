define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function toInt(str, radix) {
  assertString(str);
  return parseInt(str, radix || 10);
}

require = requireOrig;});
