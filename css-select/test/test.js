define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");
var describe = test.describe;
var it = test.it;    
describe("nwmatcher", function(){
	require("css-select/test/nwmatcher/");
});

describe("sizzle", function(){
	describe("selector", function(){
		require("css-select/test/sizzle/selector");
	});
});

describe("qwery", function(){
	exportsRun(require("css-select/test/qwery/"));
});

function exportsRun(mod){
	Object.keys(mod).forEach(function(name){
		if(typeof mod[name] === "object") describe(name, function(){
				exportsRun(mod[name]);
			});
		else it(name, mod[name]);
	});
}

require = requireOrig;});
