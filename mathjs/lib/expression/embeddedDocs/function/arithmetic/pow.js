define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'pow',
  'category': 'Operators',
  'syntax': [
    'x ^ y',
    'pow(x, y)'
  ],
  'description':
      'Calculates the power of x to y, x^y.',
  'examples': [
    '2^3',
    '2*2*2',
    '1 + e ^ (pi * i)'
  ],
  'seealso': [ 'multiply' ]
};

require = requireOrig;});
