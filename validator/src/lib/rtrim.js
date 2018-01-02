define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import assertString from './util/assertString';

export default function rtrim(str, chars) {
  assertString(str);
  const pattern = chars ? new RegExp(`[${chars}]`) : /\s/;

  let idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}

require = requireOrig;});
