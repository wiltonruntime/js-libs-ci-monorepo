define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'cosh',
  'category': 'Trigonometry',
  'syntax': [
    'cosh(x)'
  ],
  'description': 'Compute the hyperbolic cosine of x in radians.',
  'examples': [
    'cosh(0.5)'
  ],
  'seealso': [
    'sinh',
    'tanh',
    'coth'
  ]
};

require = requireOrig;});
