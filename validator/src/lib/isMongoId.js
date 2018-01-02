define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

import isHexadecimal from './isHexadecimal';

export default function isMongoId(str) {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}

require = requireOrig;});
