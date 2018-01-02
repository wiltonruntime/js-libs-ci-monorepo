define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var sax = require('sax')
var xml = '<r>'
var text = ''
for (var i in sax.ENTITIES) {
  xml += '&' + i + ';'
  text += sax.ENTITIES[i]
}
xml += '</r>'
require("sax/test/index").test({
  xml: xml,
  expect: [
    ['opentagstart', {'name': 'R', attributes: {}}],
    ['opentag', {'name': 'R', attributes: {}, isSelfClosing: false}],
    ['text', text],
    ['closetag', 'R']
  ]
})

require = requireOrig;});
