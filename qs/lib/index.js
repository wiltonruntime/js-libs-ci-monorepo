define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var stringify = require('qs/lib/stringify');
var parse = require('qs/lib/parse');
var formats = require('qs/lib/formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

require = requireOrig;});
