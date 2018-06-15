define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // type
  require('./Chain'),

  // construction function
  require('./function/chain')
];

require = requireOrig;});
