define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./acos'),
  require('./acosh'),
  require('./acot'),
  require('./acoth'),
  require('./acsc'),
  require('./acsch'),
  require('./asec'),
  require('./asech'),
  require('./asin'),
  require('./asinh'),
  require('./atan'),
  require('./atan2'),
  require('./atanh'),
  require('./cos'),
  require('./cosh'),
  require('./cot'),
  require('./coth'),
  require('./csc'),
  require('./csch'),
  require('./sec'),
  require('./sech'),
  require('./sin'),
  require('./sinh'),
  require('./tan'),
  require('./tanh')
];

require = requireOrig;});
