define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./mad'),
  require('./max'),
  require('./mean'),
  require('./median'),
  require('./min'),
  require('./mode'),
  require('./prod'),
  require('./quantileSeq'),
  require('./std'),
  require('./sum'),
  require('./var')
];

require = requireOrig;});
