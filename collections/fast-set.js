define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var Shim = require("collections/shim");
var FastSet = require("collections/_fast-set");
var PropertyChanges = require("collections/listen/property-changes");

module.exports = FastSet;

Object.addEach(FastSet.prototype, PropertyChanges.prototype);

require = requireOrig;});
