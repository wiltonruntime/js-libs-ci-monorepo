define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var StringMap = require("./stringmap");
var assert = require("assert");

print("test: stringmap");

var sm1 = new StringMap();
sm1.set("greeting", "yoyoma");
sm1.set("check", true);
sm1.set("__proto__", -1);
assert(sm1.has("greeting")); // true
assert.equal(sm1.get("__proto__"), -1); // -1
sm1.remove("greeting");
assert.equal(sm1.keys()[0], "check"); // [ 'check', '__proto__' ]
assert.equal(sm1.keys()[1], "__proto__"); // [ 'check', '__proto__' ]
assert(sm1.values()[0]); // [ true, -1 ]
assert.equal(sm1.values()[1], -1); // [ true, -1 ]
//console.log(sm1.items()); // [ [ 'check', true ], [ '__proto__', -1 ] ]
assert.equal(sm1.toString(), '{"check":true,"__proto__":-1}'); // {"check":true,"__proto__":-1}

var sm2 = new StringMap({
    one: 1,
    two: 2
});
assert.deepEqual(sm2.map(function(value, key) {
    return value * value;
}), [1, 4]); // [ 1, 4 ]
sm2.forEach(function(value, key) {
    // ...
});
assert(!sm2.isEmpty()); // false
assert.equal(sm2.size(), 2); // 2

var sm3 = sm1.clone();
sm3.merge(sm2);
sm3.setMany({
    a: {},
    b: []
});
assert.equal(sm3.toString(), '{"check":true,"one":1,"two":2,"a":{},"b":[],"__proto__":-1}'); // {"check":true,"one":1,"two":2,"a":{},"b":[],"__proto__":-1}

require = requireOrig;});
