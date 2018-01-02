define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

const patch = require('fantasy-land/patch');
const Id = require('fantasy-land/id');
const Sum = require('fantasy-land/sum');
const Compose = require('fantasy-land/compose');
const {equality} = require('fantasy-land/func');

module.exports = {
  Id,
  Sum,
  Compose,
  equality,
  patch,
};

require = requireOrig;});
