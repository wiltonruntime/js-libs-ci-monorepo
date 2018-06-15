define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'sech',
  'category': 'Trigonometry',
  'syntax': [
    'sech(x)'
  ],
  'description': 'Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)',
  'examples': [
    'sech(2)',
    '1 / cosh(2)'
  ],
  'seealso': [
    'coth',
    'csch',
    'cosh'
  ]
};

require = requireOrig;});
