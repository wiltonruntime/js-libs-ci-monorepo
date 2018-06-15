define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
module.exports = [
  require('./setCartesian'),
  require('./setDifference'),
  require('./setDistinct'),
  require('./setIntersect'),
  require('./setIsSubset'),
  require('./setMultiplicity'),
  require('./setPowerset'),
  require('./setSize'),
  require('./setSymDifference'),
  require('./setUnion')
];

require = requireOrig;});
