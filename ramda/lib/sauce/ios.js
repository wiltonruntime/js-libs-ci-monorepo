define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = [
  {
    browserName: 'ipad',
    version: '8.1',
    'device-orientation': 'portrait',
    platform: 'OS X 10.9'
  },
  {
    browserName: 'ipad',
    version: '4.3',
    'device-orientation': 'portrait',
    platform: 'OS X 10.6'
  }
];

require = requireOrig;});
