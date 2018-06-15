define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // type
  require('./Complex'),

  // construction function
  require('./function/complex')
];

require = requireOrig;});
