define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var p = require("sax/test/index").test({
  expect: [
    ['opentagstart', {'name': 'R', 'attributes': {}}],
    ['opentag', {'name': 'R', 'attributes': {}, 'isSelfClosing': false}],
    ['opencdata', undefined],
    ['cdata', '[[[[[[[[]]]]]]]]'],
    ['closecdata', undefined],
    ['closetag', 'R']
  ]
})
var x = '<r><![CDATA[[[[[[[[[]]]]]]]]]]></r>'
for (var i = 0; i < x.length; i++) {
  p.write(x.charAt(i))
}
p.close()

var p2 = require("sax/test/index").test({
  expect: [
    ['opentagstart', {'name': 'R', 'attributes': {}}],
    ['opentag', {'name': 'R', 'attributes': {}, 'isSelfClosing': false}],
    ['opencdata', undefined],
    ['cdata', '[[[[[[[[]]]]]]]]'],
    ['closecdata', undefined],
    ['closetag', 'R']
  ]
})
x = '<r><![CDATA[[[[[[[[[]]]]]]]]]]></r>'
p2.write(x).close()

require = requireOrig;});
