define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'format',
  'category': 'Utils',
  'syntax': [
    'format(value)',
    'format(value, precision)'
  ],
  'description': 'Format a value of any type as string.',
  'examples': [
    'format(2.3)',
    'format(3 - 4i)',
    'format([])',
    'format(pi, 3)'
  ],
  'seealso': ['print']
};

require = requireOrig;});
