define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

export default function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}

require = requireOrig;});
