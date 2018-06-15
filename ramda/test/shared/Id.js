define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var concat = require('ramda').concat;
var equals = require('ramda').equals;
var map = require('ramda').map;
var toString = require('ramda').toString;


//  Id :: a -> Id a
module.exports = function Id(value) {
  return {
    '@@type': 'ramda/Id',
    'fantasy-land/equals': function(other) { return other != null && other['@@type'] === this['@@type'] && equals(other.value, value); },
    'fantasy-land/concat': function(id) { return Id(concat(value, id.value)); },
    'fantasy-land/map': function(f) { return Id(f(value)); },
    'fantasy-land/ap': function(id) { return Id(id.value(value)); },
    'fantasy-land/chain': function(f) { return f(value); },
    'fantasy-land/reduce': function(f, x) { return f(x, value); },
    'fantasy-land/traverse': function(f, of) { return map(Id, f(value)); },
    sequence: function(of) { return map(Id, this.value); },
    constructor: {'fantasy-land/of': Id},
    toString: function() { return 'Id(' + toString(value) + ')'; },
    value: value
  };
};

require = requireOrig;});
