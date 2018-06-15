define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'transpose',
  'category': 'Matrix',
  'syntax': [
    'x\'',
    'transpose(x)'
  ],
  'description': 'Transpose a matrix',
  'examples': [
    'a = [1, 2, 3; 4, 5, 6]',
    'a\'',
    'transpose(a)'
  ],
  'seealso': [
    'concat', 'det', 'diag', 'eye', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'zeros'
  ]
};

require = requireOrig;});
