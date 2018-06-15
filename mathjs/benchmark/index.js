define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// run all benchmarks
require ('./expression_parser');
require ('./algebra');
require ('./matrix_operations');

require = requireOrig;});
