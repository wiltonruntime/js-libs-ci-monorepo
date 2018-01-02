define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");    
var describe = test.describe;
var it = test.it;
var htmlparser2 = require("htmlparser2"),
    assert = require("assert");

describe("WritableStream", function(){

	it("should decode fragmented unicode characters", function(){
		var processed = false;
		var stream = new htmlparser2.WritableStream({
			ontext: function(text){
				assert.equal(text, "€");
				processed = true;
			}
		});

		stream.write(new Buffer([0xE2, 0x82]));
		stream.write(new Buffer([0xAC]));
		stream.end();

		assert(processed);
	});
});

require = requireOrig;});
