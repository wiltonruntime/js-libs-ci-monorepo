define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

export default function isFullWidth(str) {
  assertString(str);
  return fullWidth.test(str);
}

require = requireOrig;});
