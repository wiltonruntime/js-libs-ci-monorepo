define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // type
  require('./BigNumber'),

  // construction function
  require('./function/bignumber')
];

require = requireOrig;});
