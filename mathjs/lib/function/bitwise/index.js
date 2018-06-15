define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./bitAnd'),
  require('./bitNot'),
  require('./bitOr'),
  require('./bitXor'),
  require('./leftShift'),
  require('./rightArithShift'),
  require('./rightLogShift')
];

require = requireOrig;});
