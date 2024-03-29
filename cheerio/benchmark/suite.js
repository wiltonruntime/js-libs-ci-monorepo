define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var fs = require('fs');
var path = require('path');

var Benchmark = require('benchmark');
var jsdom = require('jsdom');
var cheerio = require('..');

var documentDir = path.join(__dirname, 'documents');
var jQuerySrc = path.join(__dirname, '../node_modules/jquery/dist/jquery.slim.js');
var filterRe = /./;
var cheerioOnly = false;

var Suites = module.exports = function() {};

Suites.prototype.filter = function(str) {
  filterRe = new RegExp(str, 'i');
};

Suites.prototype.cheerioOnly = function() {
  cheerioOnly = true;
};

Suites.prototype.add = function(name, fileName, options) {
  var markup, suite, testFn;
  if (!filterRe.test(name)) {
    return;
  }
  markup = fs.readFileSync(path.join(documentDir, fileName), 'utf8');
  suite = new Benchmark.Suite(name);
  testFn = options.test;

  suite.on('start', function(event) {
    console.log('Test: ' + name + ' (file: ' + fileName + ')');
  });
  suite.on('cycle', function(event) {
    if (event.target.error) {
      return;
    }
    console.log('\t' + String(event.target));
  });
  suite.on('error', function(event) {
    console.log('*** Error in ' + event.target.name + ': ***');
    console.log('\t' + event.target.error);
    console.log('*** Test invalidated. ***');
  });
  suite.on('complete', function(event) {
    if (event.target.error) {
      console.log();
      return;
    }
    console.log('\tFastest: ' + this.filter('fastest')[0].name + '\n');
  });

  this._benchCheerio(suite, markup, options);
  if (!cheerioOnly) {
    this._benchJsDom(suite, markup, options);
  } else {
    suite.run();
  }
};

Suites.prototype._benchJsDom = function(suite, markup, options) {
  var testFn = options.test;

  jsdom.env({
    html: markup,
    scripts: jQuerySrc,
    done: function(err, window) {
      var setupData;
      if (options.setup) {
        setupData = options.setup.call(null, window.$);
      }
      suite.add('jsdom', function() {
        testFn.call(null, window.$, setupData);
      });
      suite.run();
    }
  });
};

Suites.prototype._benchCheerio = function(suite, markup, options) {
  var $ = cheerio.load(markup);
  var testFn = options.test;
  var setupData;
  if (options.setup) {
    setupData = options.setup.call(null, $);
  }
  suite.add('cheerio', function() {
    testFn.call(null, $, setupData);
  });
};

require = requireOrig;});
