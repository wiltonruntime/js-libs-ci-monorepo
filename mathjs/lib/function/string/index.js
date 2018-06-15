define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./format'),
  require('./print')
];

require = requireOrig;});
