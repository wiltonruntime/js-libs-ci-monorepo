define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'coth',
  'category': 'Trigonometry',
  'syntax': [
    'coth(x)'
  ],
  'description': 'Compute the hyperbolic cotangent of x in radians.',
  'examples': [
    'coth(2)',
    '1 / tanh(2)'
  ],
  'seealso': [
    'sech',
    'csch',
    'tanh'
  ]
};

require = requireOrig;});
