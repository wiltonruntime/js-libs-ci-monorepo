define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert       = require('assert');
var describe     = require("tape-compat").describe;
var it     = require("tape-compat").it;
var TapeRecorder = require('saxpath/test/tape_recorder');

var sax     = require('sax');
var Readable = require("readable-stream").Readable;
var saxpath = require('saxpath');
var sts = require("string-to-stream");


describe('SaXPath', function() {
    it('should match /bookstore', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/bookstore', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape = recorder.box[0];
            assert.ok(tape.length > 0);
            assert.equal(tape[1].openTag.name, 'bookstore');

            done();
        }

        });
    });

    it('should match /bookstore/book', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/bookstore/book', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 4);

            var tape;
            var i;
            for (i = 0; i < 4; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'book');
            }

            done();
        }

        });
    });

    it('should match /bookstore/book[@category="COOKING"]', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/bookstore/book[@category="COOKING"]', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape;
            var i;
            for (i = 0; i < 1; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'book');
            }

            done();
        }

        });
    });

    it('should not match /bookstore/title', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/bookstore/title', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 0);
            done();
        }

        });
    });

    it('should match //book', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//book', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 4);

            var tape;
            var i;
            for (i = 0; i < 4; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'book');
            }

            done();
        }

        });
    });

    it('should match //book[@category="COOKING"]', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//book[@category="COOKING"]', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape = recorder.box[0];
            assert.ok(tape.length > 0);
            assert.equal(tape[1].openTag.name, 'book');
            assert.deepEqual(tape[1].openTag.attributes, { category: 'COOKING' });

            done();
        }

        });
    });

    it('should match //book/title', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//book/title', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 4);

            var tape;
            var i;
            for (i = 0; i < 4; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'title');
            }

            done();
        }

        });
    });

    it('should match //book//title', function(done) {
        require(["text!saxpath/test/data/bookstore.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//book//title', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 4);

            var tape;
            var i;
            for (i = 0; i < 4; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'title');
            }

            done();
        }

        });
    });

    it('should match all nested nodes in //node', function(done) {
        require(["text!saxpath/test/data/inception.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//node', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 3);

            var tape;
            var i;
            for (i = 0; i < 3; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'node');
            }

            done();
        }

        });
    });

    it('should be able to match nodes with namespaces in //test:node', function(done) {
        require(["text!saxpath/test/data/namespace.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//test:node', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape;
            var i;
            for (i = 0; i < 1; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'test:node');
            }

            done();
        }

        });
    });

    it('should match node, namespace and attribute names with numbers and underscores in them', function(done) {
        require(["text!saxpath/test/data/numbers.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//nam3_spac3:nod3[@special_attribut3_name="foo"]/subnod3', recorder);
        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape = recorder.box[0];
            assert.ok(tape.length > 0);
            assert.equal(tape[1].openTag.name, 'subnod3');

            done();
        }

        });
    });

    it('should match attributes values with numbers, underscores and spaces', function(done) {
        require(["text!saxpath/test/data/numbers.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//nam3_spac3:nod3[@special_attribut3_name="0 some_value"]/subnod3', recorder);
        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape = recorder.box[0];
            assert.ok(tape.length > 0);
            assert.equal(tape[1].openTag.name, 'subnod3');

            done();
        }

        });
    });

    it('should throw a SyntaxError if a namespace starts with a number', function(done) {
        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        try {
            var streamer   = new saxpath.SaXPath(saxParser, '/0:test', recorder);
            assert.fail(); // should not execute this instruction
        } catch (err) {
            assert.equal(err.name, 'SyntaxError');
            done();
        }
    });

    it('should be able to match nodes in /root/*/somenode', function(done) {
        require(["text!saxpath/test/data/wildcard.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/root/*/somenode', recorder);
        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 3);

            var tape;
            var i;
            for (i = 0; i < 3; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'somenode');
            }

            done();
        }

        });
    });

    it('should be able to match namespaced nodes with wildcard //test:*', function(done) {
        require(["text!saxpath/test/data/namespace.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//test:*', recorder);
        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            var tape;
            var i;
            for (i = 0; i < 1; ++i) {
                tape = recorder.box[i];
                assert.ok(tape.length > 0);
                assert.equal(tape[1].openTag.name, 'test:node');
            }

            done();
        }

        });
    });

    it('should be able to find CDATA values', function(done) {
        require(["text!saxpath/test/data/cdata.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '/root/node', recorder);
        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 3); // 3 matches on /root/node

            assert.equal(recorder.box[0][2].openCData, true);
            assert.equal(recorder.box[0][3].cdata, 'Sample data value');
            assert.equal(recorder.box[0][4].closeCData, true);

            assert.equal(recorder.box[2][2].openCData, true);
            assert.equal(recorder.box[2][3].cdata, 'Other CDATA value');
            assert.equal(recorder.box[2][4].closeCData, true);

            done();
        }

        });
    });

    it('should match //node-1', function(done) {
        require(["text!saxpath/test/data/hyphens.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//node-1', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 2);

            assert.equal(recorder.box[0][1].openTag.name, 'node-1');
            assert.equal(recorder.box[1][1].openTag.name, 'node-1');

            done();
        }

        });
    });

    it('should match //test-ns:node-1', function(done) {
        require(["text!saxpath/test/data/namespace-hyphens.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//test-ns:node-1', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 2);

            assert.equal(recorder.box[0][1].openTag.name, 'test-ns:node-1');
            assert.equal(recorder.box[1][1].openTag.name, 'test-ns:node-1');

            done();
        }

        });
    });

    it('should match //node.1', function(done) {
        require(["text!saxpath/test/data/dots.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//node.1', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 2);

            assert.equal(recorder.box[0][1].openTag.name, 'node.1');
            assert.equal(recorder.box[1][1].openTag.name, 'node.1');

            done();
        }

        });
    });

    it('should match //test.ns:node.1', function(done) {
        require(["text!saxpath/test/data/namespace-dots.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//test.ns:node.1', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 2);

            assert.equal(recorder.box[0][1].openTag.name, 'test.ns:node.1');
            assert.equal(recorder.box[1][1].openTag.name, 'test.ns:node.1');

            done();
        }

        });
    });

    it('should match escaped values', function(done) {
        require(["text!saxpath/test/data/attr_amp.xml"], function(data) { var fileStream = sts(data);

        var recorder   = new TapeRecorder();
        var saxParser  = sax.createStream(true);
        var streamer   = new saxpath.SaXPath(saxParser, '//node[@attr="&"]', recorder);

        saxParser.on('end', testNodesRecorded);
        fileStream.pipe(saxParser);

        function testNodesRecorded() {
            assert.equal(recorder.box.length, 1);

            assert.equal(recorder.box[0][1].openTag.name, 'node');

            done();
        }

        });
    });
});

require = requireOrig;});
