define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./compile'),
  require('./eval'),
  require('./help'),
  require('./parse'),
  require('./parser')
];

require = requireOrig;});
