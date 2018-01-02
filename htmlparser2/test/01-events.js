define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var helper = require("htmlparser2/test-helper.js");

helper.mochaTest("Events", __dirname, function(test, cb){
	helper.writeToParser(
		helper.getEventCollector(cb),
		test.options.parser,
		test.html
	);
});

require = requireOrig;});
