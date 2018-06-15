define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  // Note that the docs folder is called "embeddedDocs" and not "docs" to prevent issues
  // with yarn autoclean. See https://github.com/josdejong/mathjs/issues/969
  require('./embeddedDocs/index'),
  require('./function/index'),
  require('./node/index'),
  require('./transform/index'),

  require('./Help'),
  require('./parse'),
  require('./Parser')
];

require = requireOrig;});
