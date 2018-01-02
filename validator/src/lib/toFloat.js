define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function toFloat(str) {
  assertString(str);
  return parseFloat(str);
}

require = requireOrig;});
