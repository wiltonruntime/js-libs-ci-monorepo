define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'version',
  'category': 'Constants',
  'syntax': [
    'version'
  ],
  'description': 'A string with the version number of math.js',
  'examples': [
    'version'
  ],
  'seealso': []
};

require = requireOrig;});
