define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'kldivergence',
  'category': 'Probability',
  'syntax': [
    'kldivergence(x, y)'
  ],
  'description': 'Calculate the Kullback-Leibler (KL) divergence  between two distributions.',
  'examples': [
    'kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])'
  ],
  'seealso': []
};

require = requireOrig;});
