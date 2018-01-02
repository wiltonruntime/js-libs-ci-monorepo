define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var propEq = require('ramda/..').propEq;

module.exports = {
  name: 'propEq',
  tests: {
    'propEq("value", [1, 2, 3], {value: [1, 2, 3]})': function() {
      propEq('value', [1, 2, 3], {value: [1, 2, 3]});
    }
  }
};

require = requireOrig;});
