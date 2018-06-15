define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'sinh',
  'category': 'Trigonometry',
  'syntax': [
    'sinh(x)'
  ],
  'description': 'Compute the hyperbolic sine of x in radians.',
  'examples': [
    'sinh(0.5)'
  ],
  'seealso': [
    'cosh',
    'tanh'
  ]
};

require = requireOrig;});
