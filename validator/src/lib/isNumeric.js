define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

const numeric = /^[-+]?[0-9]+$/;

export default function isNumeric(str) {
  assertString(str);
  return numeric.test(str);
}

require = requireOrig;});
