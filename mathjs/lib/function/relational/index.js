define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./compare'),
  require('./compareNatural'),
  require('./compareText'),
  require('./deepEqual'),
  require('./equal'),
  require('./equalText'),
  require('./larger'),
  require('./largerEq'),
  require('./smaller'),
  require('./smallerEq'),
  require('./unequal')
];

require = requireOrig;});
