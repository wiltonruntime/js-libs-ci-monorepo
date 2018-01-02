
define(["assert"], function(assert) {
    "use strict";
    
    require(["json!json/sample.json"], function(sample) {
        print("test: json loader");
        assert(sample);
        assert.equal(sample.foo, "bar");
        assert.equal(sample.baz, 42);
    });

    return {
        main: function() {
        }
    };
});

