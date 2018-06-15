define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./and'),
  require('./not'),
  require('./or'),
  require('./xor')
];

require = requireOrig;});
