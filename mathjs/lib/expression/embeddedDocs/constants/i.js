define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'i',
  'category': 'Constants',
  'syntax': [
    'i'
  ],
  'description': 'Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.',
  'examples': [
    'i',
    'i * i',
    'sqrt(-1)'
  ],
  'seealso': []
};

require = requireOrig;});
