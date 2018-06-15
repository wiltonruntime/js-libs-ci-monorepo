define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./type/index'),        // data types (Matrix, Complex, Unit, ...)
  require('./constants'),   // constants
  require('./expression/index'),  // expression parsing
  require('./function/index'),    // functions
  require('./json/index'),        // serialization utility (math.json.reviver)
  require('./error/index')        // errors
];

require = requireOrig;});
