define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

const decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

export default function isDecimal(str) {
  assertString(str);
  return str !== '' && decimal.test(str);
}

require = requireOrig;});
