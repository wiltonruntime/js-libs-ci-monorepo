define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // type
  require('./Fraction'),

  // construction function
  require('./function/fraction')
];

require = requireOrig;});
