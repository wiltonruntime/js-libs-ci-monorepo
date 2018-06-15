define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'abs',
  'category': 'Arithmetic',
  'syntax': [
    'abs(x)'
  ],
  'description': 'Compute the absolute value.',
  'examples': [
    'abs(3.5)',
    'abs(-4.2)'
  ],
  'seealso': ['sign']
};

require = requireOrig;});
