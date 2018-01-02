define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

// use simplistic regex check from here: https://stackoverflow.com/a/46181/314015
// regexes from original impl are too heavy for Duktape
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
    return regex.test(email);
}

module.exports = exports['default'];

require = requireOrig;});
