define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./algebra/index'),
  require('./arithmetic/index'),
  require('./bitwise/index'),
  require('./combinatorics/index'),
  require('./complex/index'),
  require('./geometry/index'),
  require('./logical/index'),
  require('./matrix/index'),
  require('./probability/index'),
  require('./relational/index'),
  require('./set/index'),
  require('./special/index'),
  require('./statistics/index'),
  require('./string/index'),
  require('./trigonometry/index'),
  require('./unit/index'),
  require('./utils/index')
];

require = requireOrig;});
