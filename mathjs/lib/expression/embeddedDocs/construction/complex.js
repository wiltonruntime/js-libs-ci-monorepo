define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'complex',
  'category': 'Construction',
  'syntax': [
    'complex()',
    'complex(re, im)',
    'complex(string)'
  ],
  'description':
      'Create a complex number.',
  'examples': [
    'complex()',
    'complex(2, 3)',
    'complex("7 - 2i")'
  ],
  'seealso': [
    'bignumber', 'boolean', 'index', 'matrix', 'number', 'string', 'unit'
  ]
};

require = requireOrig;});
