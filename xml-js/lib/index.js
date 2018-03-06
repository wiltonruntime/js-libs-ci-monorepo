define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/*jslint node:true */

var xml2js = require('xml-js/lib/xml2js');
var xml2json = require('xml-js/lib/xml2json');
var js2xml = require('xml-js/lib/js2xml');
var json2xml = require('xml-js/lib/json2xml');

module.exports = {
  xml2js: xml2js,
  xml2json: xml2json,
  js2xml: js2xml,
  json2xml: json2xml
};

require = requireOrig;});
