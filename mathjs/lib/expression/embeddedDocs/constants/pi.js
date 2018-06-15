define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  'name': 'pi',
  'category': 'Constants',
  'syntax': [
    'pi'
  ],
  'description': 'The number pi is a mathematical constant that is the ratio of a circle\'s circumference to its diameter, and is approximately equal to 3.14159',
  'examples': [
    'pi',
    'sin(pi/2)'
  ],
  'seealso': ['tau']
};

require = requireOrig;});
