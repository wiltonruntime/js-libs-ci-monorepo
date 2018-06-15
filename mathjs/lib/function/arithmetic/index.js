define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./abs'),
  require('./add'),
  require('./addScalar'),
  require('./cbrt'),
  require('./ceil'),
  require('./cube'),
  require('./divide'),
  require('./dotDivide'),
  require('./dotMultiply'),
  require('./dotPow'),
  require('./exp'),
  require('./expm1'),
  require('./fix'),
  require('./floor'),
  require('./gcd'),
  require('./hypot'),
  require('./lcm'),
  require('./log'),
  require('./log10'),
  require('./log1p'),
  require('./log2'),
  require('./mod'),
  require('./multiply'),
  require('./norm'),
  require('./nthRoot'),
  require('./pow'),
  require('./round'),
  require('./sign'),
  require('./sqrt'),
  require('./square'),
  require('./subtract'),
  require('./unaryMinus'),
  require('./unaryPlus'),
  require('./xgcd')
];

require = requireOrig;});
