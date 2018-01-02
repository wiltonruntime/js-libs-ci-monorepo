define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// sigh... life is hard
if (!global.console) {
    console = {}
}

var fns = ['log', 'error', 'trace'];
for (var i=0 ; i<fns.length ; ++i) {
    var fn = fns[i];
    if (!console[fn]) {
        console[fn] = function() {};
    }
}

if (!Array.isArray) {
    Array.isArray = function(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
}

require = requireOrig;});
