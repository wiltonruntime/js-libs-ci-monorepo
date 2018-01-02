define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// unquoted attributes should be ok in non-strict mode
// https://github.com/isaacs/sax-js/issues/31
require("sax/test/index").test({
  xml: '<span class=test hello=world></span>',
  expect: [
    [
      'opentagstart',
      {
        name: 'SPAN',
        attributes: {}
      }
    ],
    [
      'attribute',
      {
        name: 'CLASS',
        value: 'test'
      }
    ],
    [
      'attribute',
      {
        name: 'HELLO',
        value: 'world'
      }
    ],
    [
      'opentag',
      {
        name: 'SPAN',
        attributes: {
          CLASS: 'test',
          HELLO: 'world'
        },
        isSelfClosing: false
      }
    ],
    [
      'closetag',
      'SPAN'
    ]
  ],
  strict: false,
  opt: {}
})

require = requireOrig;});
