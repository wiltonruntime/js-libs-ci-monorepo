
define({
    load: function(name, req, onload) {
        req(["text!" + name], function(text) {
            var json = JSON.parse(text);
            onload(json);
        });
    }
});

