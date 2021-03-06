define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

module.exports.ArgumentParser = require('argparse/lib/argument_parser.js');
module.exports.Namespace = require('argparse/lib/namespace');
module.exports.Action = require('argparse/lib/action');
module.exports.HelpFormatter = require('argparse/lib/help/formatter.js');
module.exports.Const = require('argparse/lib/const.js');

module.exports.ArgumentDefaultsHelpFormatter =
  require('argparse/lib/help/added_formatters.js').ArgumentDefaultsHelpFormatter;
module.exports.RawDescriptionHelpFormatter =
  require('argparse/lib/help/added_formatters.js').RawDescriptionHelpFormatter;
module.exports.RawTextHelpFormatter =
  require('argparse/lib/help/added_formatters.js').RawTextHelpFormatter;

require = requireOrig;});
