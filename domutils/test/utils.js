define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var htmlparser = require("htmlparser2");

exports.makeDom = function(markup) {
	var handler = new htmlparser.DomHandler(),
		parser = new htmlparser.Parser(handler);
	parser.write(markup);
	parser.done();
	return handler.dom;
};

require = requireOrig;});
