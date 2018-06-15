define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // type
  require('./Unit'),

  // construction function
  require('./function/unit'),

  // create new units
  require('./function/createUnit'),

  // split units
  require('./function/splitUnit'),

  // physical constants
  require('./physicalConstants')
];

require = requireOrig;});
