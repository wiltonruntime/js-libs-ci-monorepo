define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
require("collections/list-demo");
require("collections/fast-map-demo");
require("collections/fast-set-demo");
require("collections/map-demo");
require("collections/set-demo");
require("collections/sorted-map-demo");
require("collections/sorted-set-demo");
require("collections/iterator-demo");

require = requireOrig;});
