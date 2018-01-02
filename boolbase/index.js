define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

require = requireOrig;});
