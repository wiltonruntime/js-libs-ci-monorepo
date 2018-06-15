define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./clone'),
  require('./isInteger'),
  require('./isNegative'),
  require('./isNumeric'),
  require('./isPositive'),
  require('./isPrime'),
  require('./isZero'),
  require('./isNaN'),
  require('./typeof')
];

require = requireOrig;});
