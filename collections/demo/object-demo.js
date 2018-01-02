define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

require("collections/shim-object");

Object.forEach({a: 10, b: 20}, function (value, key) {
    console.log(key + ": " + value);
});


require = requireOrig;});
