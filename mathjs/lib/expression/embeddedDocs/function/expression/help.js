define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'help',
  'category': 'Expression',
  'syntax': [
    'help(object)',
    'help(string)'
  ],
  'description': 'Display documentation on a function or data type.',
  'examples': [
    'help(sqrt)',
    'help("complex")'
  ],
  'seealso': []
};

require = requireOrig;});
