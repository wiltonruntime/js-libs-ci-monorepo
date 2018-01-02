define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// https://github.com/isaacs/sax-js/issues/124
require("sax/test/index").test({
  xml: '<!-- stand alone comment -->',
  expect: [
    [
      'comment',
      ' stand alone comment '
    ]
  ],
  strict: true,
  opt: {}
})

require = requireOrig;});
