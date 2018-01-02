
define  (["assert", "immutable"], function(assert, immutable) {
    print("test: immutable sanity");
    var map1 = immutable.Map({a: 1, b: 2, c: 3});
    var map2 = map1.set('b', 50);
    assert.equal(map1.get('b'), 2);
    assert.equal(map2.get('b'), 50);
});
