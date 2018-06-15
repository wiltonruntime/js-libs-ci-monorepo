define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./derivative'),

  // simplify
  require('./simplify'),

  // polynomial 
  require('./rationalize'),
    
  
  // decomposition
  require('./decomposition/qr'),
  require('./decomposition/lup'),
  require('./decomposition/slu'),

  // solver
  require('./solver/lsolve'),
  require('./solver/lusolve'),
  require('./solver/usolve')
];

require = requireOrig;});
