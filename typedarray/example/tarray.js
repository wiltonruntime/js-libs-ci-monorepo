define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var Uint8Array = require('typedarray').Uint8Array;
var ua = new Uint8Array(5);
ua[1] = 256 + 55;
console.log(ua[1]);

require = requireOrig;});
