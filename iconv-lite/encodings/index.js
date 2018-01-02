define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
    require("iconv-lite/encodings/internal"),
    require("iconv-lite/encodings/utf16"),
    require("iconv-lite/encodings/utf7"),
    require("iconv-lite/encodings/sbcs-codec"),
    require("iconv-lite/encodings/sbcs-data"),
    require("iconv-lite/encodings/sbcs-data-generated"),
    require("iconv-lite/encodings/dbcs-codec"),
    require("iconv-lite/encodings/dbcs-data"),
];

// Put all encoding/alias/codec definitions to single object and export it. 
for (var i = 0; i < modules.length; i++) {
    var mod = modules[i];
    for (var enc in mod)
        if (Object.prototype.hasOwnProperty.call(mod, enc))
            exports[enc] = mod[enc];
}

require = requireOrig;});
