define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'csch',
  'category': 'Trigonometry',
  'syntax': [
    'csch(x)'
  ],
  'description': 'Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)',
  'examples': [
    'csch(2)',
    '1 / sinh(2)'
  ],
  'seealso': [
    'sech',
    'coth',
    'sinh'
  ]
};

require = requireOrig;});
