define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

module.exports = {
	// List of all events that the parser emits
		attribute: 2,
		cdatastart: 0,
		cdataend: 0,
		text: 1,
		processinginstruction: 2,
		comment: 1,
		commentend: 0,
		closetag: 1,
		opentag: 2,
		opentagname: 1,
		error: 1,
		end: 0
};

require = requireOrig;});
