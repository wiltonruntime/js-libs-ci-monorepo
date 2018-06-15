define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./bellNumbers'),
  require('./composition'),
  require('./stirlingS2'),
  require('./catalan')
];

require = requireOrig;});
