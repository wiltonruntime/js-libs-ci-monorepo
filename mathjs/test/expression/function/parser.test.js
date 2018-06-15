define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var math = require('../../../index');
var Parser = math.expression.Parser;

describe('parser', function() {

  it('should create a parser', function() {
    var parser = math.parser();

    assert(parser instanceof Parser);
  });

  it('should LaTeX parser', function () { //This doesn't really make sense in a way
    var expression = math.parse('parser()');
    assert.equal(expression.toTex(), '\\mathrm{parser}\\left(\\right)');
  });

});


require = requireOrig;});
