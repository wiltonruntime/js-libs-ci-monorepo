define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'composition',
  'category': 'Combinatorics',
  'syntax': [
    'composition(n, k)'
  ],
  'description': 'The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.',
  'examples': [
    'composition(5, 3)'
  ],
  'seealso': ['combinations']
};

require = requireOrig;});
