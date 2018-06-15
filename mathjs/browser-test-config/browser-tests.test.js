define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

const testsContext = require.context('../test/', true, /.test\.js$/);

testsContext.keys().forEach(testsContext);

require = requireOrig;});
