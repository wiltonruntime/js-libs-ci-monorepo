define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./bignumber/index'),
  require('./boolean'),
  require('./chain/index'),
  require('./complex/index'),
  require('./fraction/index'),
  require('./matrix/index'),
  require('./number'),
  require('./resultset/index'),
  require('./string'),
  require('./unit/index')
];

require = requireOrig;});
