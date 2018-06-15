define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./arg'),
  require('./conj'),
  require('./im'),
  require('./re')
];

require = requireOrig;});
