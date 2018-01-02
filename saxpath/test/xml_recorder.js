define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var sax     = require('sax');
var assert  = require('assert');
var describe     = require("tape-compat").describe;
var it     = require("tape-compat").it;

var saxpath = require('saxpath');
var sts = require("string-to-stream");


describe('XmlRecorder', function() {
    it('should re-escape values', function(done) {
        require(["text!saxpath/test/data/re-escape.xml"], function(data) { var fileStream = sts(data);

        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//node');

        streamer.on('match', onMatch);
        streamer.on('end', onEnd);

        // store matched XML instead of finishing test/calling done(),
        // otherwise sax parser will complain about not ending the root tag
        var xml = [];
        function onMatch(matchedXml) {
            xml.push(matchedXml);
        }

        function onEnd() {
            assert.equal(xml[0], '<node attr="&lt;test&gt;"></node>');
            assert.equal(xml[1], '<node>Test &lt; and &gt; text node</node>');
            done();
        }

        fileStream.pipe(saxParser);

        });
    });
});

require = requireOrig;});
