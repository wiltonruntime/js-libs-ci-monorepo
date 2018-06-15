define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'SQRT2',
  'category': 'Constants',
  'syntax': [
    'SQRT2'
  ],
  'description': 'Returns the square root of 2, approximately equal to 1.414',
  'examples': [
    'SQRT2',
    'sqrt(2)'
  ],
  'seealso': []
};

require = requireOrig;});
