define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var assign = require("lodash/assign");

// Map the characters to escape to their escaped values. The list is derived
// from http://www.cespedes.org/blog/85/how-to-escape-latex-special-characters
var defaultEscapes = {
  "{": "\\{",
  "}": "\\}",
  "\\": "\\textbackslash{}",
  "#": "\\#",
  $: "\\$",
  "%": "\\%",
  "&": "\\&",
  "^": "\\textasciicircum{}",
  _: "\\_",
  "~": "\\textasciitilde{}",
};
var formatEscapes = {
  "–": "\\--",
  "—": "\\---",
  " ": "~",
  "\t": "\\qquad{}",
  "\r\n": "\\\\newline{}",
  "\n": "\\\\newline{}",
};

var defaultEscapeMapFn = function(defaultEscapes, formatEscapes) {
  return assign({}, defaultEscapes, formatEscapes);
};

/**
 * Escape a string to be used in LaTeX documents.
 * @param {string} str the string to be escaped.
 * @param {boolean} params.preserveFormatting whether formatting escapes should
 *  be performed (default: false).
 * @param {function} params.escapeMapFn the function to modify the escape maps.
 * @return {string} the escaped string, ready to be used in LaTeX.
 */
module.exports = function(
  str,
  params
) {
//  { preserveFormatting = false, escapeMapFn = defaultEscapeMapFn } = {},
  var pars = params || {};
  var preserveFormatting = pars.preserveFormatting || false;
  var escapeMapFn = pars.escapeMapFn || defaultEscapeMapFn;
  var runningStr = String(str);
  var result = "";

  var escapes = escapeMapFn(
    assign({}, defaultEscapes),
    preserveFormatting ? assign({}, formatEscapes) : {}
  );
  var escapeKeys = Object.keys(escapes); // as it is reused later on

  // Algorithm: Go through the string character by character, if it matches
  // with one of the special characters then we'll replace it with the escaped
  // version.
  while (runningStr) {
    var specialCharFound = false;
    escapeKeys.forEach(function(key, index) {
      if (specialCharFound) {
        return;
      }
      if (
        runningStr.length >= key.length &&
        runningStr.slice(0, key.length) === key
      ) {
        result += escapes[escapeKeys[index]];
        runningStr = runningStr.slice(key.length, runningStr.length);
        specialCharFound = true;
      }
    });
    if (!specialCharFound) {
      result += runningStr.slice(0, 1);
      runningStr = runningStr.slice(1, runningStr.length);
    }
  }
  return result;
};

require = requireOrig;});
