define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var Dict = require("collections/_dict");
var PropertyChanges = require("collections/listen/property-changes");
var MapChanges = require("collections/listen/map-changes");

// Burgled from https://github.com/domenic/dict

module.exports = Dict;
Object.addEach(Dict.prototype, PropertyChanges.prototype);
Object.addEach(Dict.prototype, MapChanges.prototype);

require = requireOrig;});
