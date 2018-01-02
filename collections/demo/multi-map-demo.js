define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var MultiMap = require("collections/multi-map");
require("collections/shim-array"); // for Array#swap
var List = require("collections/list");

debugger;
var map = new MultiMap({a: [1, 2, 3]}, List);
console.log(map);
var mapIter = map.keys(), key;
while (key = mapIter.next().value) {
    console.log(key);
}
console.log(map.get("a"));
console.log(map.get("a").toArray());
var before = map.get("a");
map.get("a").push(4);
console.log(map.get("a").toArray());
map.set("a", []);
console.log(map.get("a").toArray());
console.log(map.get("a") === before);

require = requireOrig;});
