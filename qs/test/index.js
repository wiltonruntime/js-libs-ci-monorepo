define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

require('qs/test/parse');

require('qs/test/stringify');

require('qs/test/utils');

require = requireOrig;});
