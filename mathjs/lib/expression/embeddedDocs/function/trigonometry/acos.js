define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'acos',
  'category': 'Trigonometry',
  'syntax': [
    'acos(x)'
  ],
  'description': 'Compute the inverse cosine of a value in radians.',
  'examples': [
    'acos(0.5)',
    'acos(cos(2.3))'
  ],
  'seealso': [
    'cos',
    'atan',
    'asin'
  ]
};

require = requireOrig;});
