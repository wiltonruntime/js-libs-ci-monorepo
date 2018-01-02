define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
import rtrim from './rtrim';
import ltrim from './ltrim';

export default function trim(str, chars) {
  return rtrim(ltrim(str, chars), chars);
}

require = requireOrig;});
