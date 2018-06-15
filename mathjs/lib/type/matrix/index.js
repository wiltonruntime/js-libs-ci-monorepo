define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // types
  require('./Matrix'),
  require('./DenseMatrix'),
  require('./SparseMatrix'),
  require('./Spa'),
  require('./FibonacciHeap'),
  require('./ImmutableDenseMatrix'),
  require('./MatrixIndex'),
  require('./Range'),

  // construction functions
  require('./function/index'),
  require('./function/matrix'),
  require('./function/sparse')
];

require = requireOrig;});
