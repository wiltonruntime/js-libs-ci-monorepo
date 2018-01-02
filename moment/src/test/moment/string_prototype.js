define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");var module = test.QUnit.module;
var moment = require("moment");

module('string prototype');

test('string prototype overrides call', function (assert) {
    var prior = String.prototype.call, b;
    String.prototype.call = function () {
        return null;
    };

    b = moment(new Date(2011, 7, 28, 15, 25, 50, 125));
    assert.equal(b.format('MMMM Do YYYY, h:mm a'), 'August 28th 2011, 3:25 pm');

    String.prototype.call = prior;
});

require = requireOrig;});
