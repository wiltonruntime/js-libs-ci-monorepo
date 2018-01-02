define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

require("retape")(require("querystring/index"))

require = requireOrig;});
