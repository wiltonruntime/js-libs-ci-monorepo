define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var test = require("tape-compat");
require('events/tests/legacy-compat');

// we do this to easily wrap each file in a mocha test
// and also have browserify be able to statically analyze this file
var orig_require = require;
var require = function(file) {
    test(file, function() {
        orig_require(file);
    });
}

require('events/tests/add-listeners.js');
// warnings in browser
//require('events/tests/check-listener-leaks.js');
require('events/tests/listener-count.js');
require('events/tests/listeners-side-effects.js');
require('events/tests/listeners.js');
require('events/tests/max-listeners.js');
require('events/tests/modify-in-emit.js');
require('events/tests/num-args.js');
require('events/tests/once.js');
require('events/tests/set-max-listeners-side-effects.js');
require('events/tests/subclass.js');
require('events/tests/remove-all-listeners.js');
require('events/tests/remove-listeners.js');

require = requireOrig;});
