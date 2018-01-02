define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function equals(str, comparison) {
  assertString(str);
  return str === comparison;
}

require = requireOrig;});
