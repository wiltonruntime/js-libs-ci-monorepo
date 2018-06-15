define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'null',
  'category': 'Constants',
  'syntax': [
    'null'
  ],
  'description': 'Value null',
  'examples': [
    'null'
  ],
  'seealso': ['true', 'false']
};

require = requireOrig;});
