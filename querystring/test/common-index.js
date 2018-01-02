define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

require("test").run(require("querystring/index"))

require = requireOrig;});
