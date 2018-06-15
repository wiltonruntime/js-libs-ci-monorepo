define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'false',
  'category': 'Constants',
  'syntax': [
    'false'
  ],
  'description': 'Boolean value false',
  'examples': [
    'false'
  ],
  'seealso': ['true']
};

require = requireOrig;});
