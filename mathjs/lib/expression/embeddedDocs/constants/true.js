define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'true',
  'category': 'Constants',
  'syntax': [
    'true'
  ],
  'description': 'Boolean value true',
  'examples': [
    'true'
  ],
  'seealso': ['false']
};

require = requireOrig;});
