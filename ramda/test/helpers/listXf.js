define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  '@@transducer/init': function() { return []; },
  '@@transducer/step': function(acc, x) { return acc.concat([x]); },
  '@@transducer/result': function(x) { return x; }
};

require = requireOrig;});
