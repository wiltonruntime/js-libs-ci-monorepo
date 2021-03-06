define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

const md5 = /^[a-f0-9]{32}$/;

export default function isMD5(str) {
  assertString(str);
  return md5.test(str);
}

require = requireOrig;});
