define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = [
  {
    browserName: 'firefox',
    version: '33',
    platform: 'Linux'
  },
  {
    browserName: 'chrome',
    version: '38',
    platform: 'Linux'
  }
];

require = requireOrig;});
