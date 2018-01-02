define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var Array = require("collections/shim-array");
var Object = require("collections/shim-object");
var Function = require("collections/shim-function");
var RegExp = require("collections/shim-regexp");


require = requireOrig;});
