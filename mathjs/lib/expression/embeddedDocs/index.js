define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
function factory (construction, config, load, typed) {
  var docs = {};


  // construction functions
  require('mathjs/lib/expression/embeddedDocs/construction/bignumber');
  docs.bignumber = require('mathjs/lib/expression/embeddedDocs/construction/bignumber');
  docs['boolean'] = require('mathjs/lib/expression/embeddedDocs/construction/boolean');
  docs.complex = require('mathjs/lib/expression/embeddedDocs/construction/complex');
  docs.createUnit = require('mathjs/lib/expression/embeddedDocs/construction/createUnit');
  docs.fraction = require('mathjs/lib/expression/embeddedDocs/construction/fraction');
  docs.index = require('mathjs/lib/expression/embeddedDocs/construction/index');
  docs.matrix = require('mathjs/lib/expression/embeddedDocs/construction/matrix');
  docs.number = require('mathjs/lib/expression/embeddedDocs/construction/number');
  docs.sparse = require('mathjs/lib/expression/embeddedDocs/construction/sparse');
  docs.splitUnit = require('mathjs/lib/expression/embeddedDocs/construction/splitUnit');
  docs.string = require('mathjs/lib/expression/embeddedDocs/construction/string');
  docs.unit = require('mathjs/lib/expression/embeddedDocs/construction/unit');

  // constants
  docs.e = require('mathjs/lib/expression/embeddedDocs/constants/e');
  docs.E = require('mathjs/lib/expression/embeddedDocs/constants/e');
  docs['false'] = require('mathjs/lib/expression/embeddedDocs/constants/false');
  docs.i = require('mathjs/lib/expression/embeddedDocs/constants/i');
  docs['Infinity'] = require('mathjs/lib/expression/embeddedDocs/constants/Infinity');
  docs.LN2 = require('mathjs/lib/expression/embeddedDocs/constants/LN2');
  docs.LN10 = require('mathjs/lib/expression/embeddedDocs/constants/LN10');
  docs.LOG2E = require('mathjs/lib/expression/embeddedDocs/constants/LOG2E');
  docs.LOG10E = require('mathjs/lib/expression/embeddedDocs/constants/LOG10E');
  docs.NaN = require('mathjs/lib/expression/embeddedDocs/constants/NaN');
  docs['null'] = require('mathjs/lib/expression/embeddedDocs/constants/null');
  docs.pi = require('mathjs/lib/expression/embeddedDocs/constants/pi');
  docs.PI = require('mathjs/lib/expression/embeddedDocs/constants/pi');
  docs.phi = require('mathjs/lib/expression/embeddedDocs/constants/phi');
  docs.SQRT1_2 = require('mathjs/lib/expression/embeddedDocs/constants/SQRT1_2');
  docs.SQRT2 = require('mathjs/lib/expression/embeddedDocs/constants/SQRT2');
  docs.tau = require('mathjs/lib/expression/embeddedDocs/constants/tau');
  docs['true'] = require('mathjs/lib/expression/embeddedDocs/constants/true');
  docs.version = require('mathjs/lib/expression/embeddedDocs/constants/version');

  // physical constants
  // TODO: more detailed docs for physical constants
  docs.speedOfLight = {description: 'Speed of light in vacuum', examples: ['speedOfLight']};
  docs.gravitationConstant = {description: 'Newtonian constant of gravitation', examples: ['gravitationConstant']};
  docs.planckConstant = {description: 'Planck constant', examples: ['planckConstant']};
  docs.reducedPlanckConstant = {description: 'Reduced Planck constant', examples: ['reducedPlanckConstant']};

  docs.magneticConstant = {description: 'Magnetic constant (vacuum permeability)', examples: ['magneticConstant']};
  docs.electricConstant = {description: 'Electric constant (vacuum permeability)', examples: ['electricConstant']};
  docs.vacuumImpedance = {description: 'Characteristic impedance of vacuum', examples: ['vacuumImpedance']};
  docs.coulomb = {description: 'Coulomb\'s constant', examples: ['coulomb']};
  docs.elementaryCharge = {description: 'Elementary charge', examples: ['elementaryCharge']};
  docs.bohrMagneton = {description: 'Borh magneton', examples: ['bohrMagneton']};
  docs.conductanceQuantum = {description: 'Conductance quantum', examples: ['conductanceQuantum']};
  docs.inverseConductanceQuantum = {description: 'Inverse conductance quantum', examples: ['inverseConductanceQuantum']};
  //docs.josephson = {description: 'Josephson constant', examples: ['josephson']};
  docs.magneticFluxQuantum = {description: 'Magnetic flux quantum', examples: ['magneticFluxQuantum']};
  docs.nuclearMagneton = {description: 'Nuclear magneton', examples: ['nuclearMagneton']};
  docs.klitzing = {description: 'Von Klitzing constant', examples: ['klitzing']};

  docs.bohrRadius = {description: 'Borh radius', examples: ['bohrRadius']};
  docs.classicalElectronRadius = {description: 'Classical electron radius', examples: ['classicalElectronRadius']};
  docs.electronMass = {description: 'Electron mass', examples: ['electronMass']};
  docs.fermiCoupling = {description: 'Fermi coupling constant', examples: ['fermiCoupling']};
  docs.fineStructure = {description: 'Fine-structure constant', examples: ['fineStructure']};
  docs.hartreeEnergy = {description: 'Hartree energy', examples: ['hartreeEnergy']};
  docs.protonMass = {description: 'Proton mass', examples: ['protonMass']};
  docs.deuteronMass = {description: 'Deuteron Mass', examples: ['deuteronMass']};
  docs.neutronMass = {description: 'Neutron mass', examples: ['neutronMass']};
  docs.quantumOfCirculation = {description: 'Quantum of circulation', examples: ['quantumOfCirculation']};
  docs.rydberg = {description: 'Rydberg constant', examples: ['rydberg']};
  docs.thomsonCrossSection = {description: 'Thomson cross section', examples: ['thomsonCrossSection']};
  docs.weakMixingAngle = {description: 'Weak mixing angle', examples: ['weakMixingAngle']};
  docs.efimovFactor = {description: 'Efimov factor', examples: ['efimovFactor']};

  docs.atomicMass = {description: 'Atomic mass constant', examples: ['atomicMass']};
  docs.avogadro = {description: 'Avogadro\'s number', examples: ['avogadro']};
  docs.boltzmann = {description: 'Boltzmann constant', examples: ['boltzmann']};
  docs.faraday = {description: 'Faraday constant', examples: ['faraday']};
  docs.firstRadiation = {description: 'First radiation constant', examples: ['firstRadiation']};
  docs.loschmidt = {description: 'Loschmidt constant at T=273.15 K and p=101.325 kPa', examples: ['loschmidt']};
  docs.gasConstant = {description: 'Gas constant', examples: ['gasConstant']};
  docs.molarPlanckConstant = {description: 'Molar Planck constant', examples: ['molarPlanckConstant']};
  docs.molarVolume = {description: 'Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa', examples: ['molarVolume']};
  docs.sackurTetrode = {description: 'Sackur-Tetrode constant at T=1 K and p=101.325 kPa', examples: ['sackurTetrode']};
  docs.secondRadiation = {description: 'Second radiation constant', examples: ['secondRadiation']};
  docs.stefanBoltzmann = {description: 'Stefan-Boltzmann constant', examples: ['stefanBoltzmann']};
  docs.wienDisplacement = {description: 'Wien displacement law constant', examples: ['wienDisplacement']};
  //docs.spectralRadiance = {description: 'First radiation constant for spectral radiance', examples: ['spectralRadiance']};

  docs.molarMass = {description: 'Molar mass constant', examples: ['molarMass']};
  docs.molarMassC12 = {description: 'Molar mass constant of carbon-12', examples: ['molarMassC12']};
  docs.gravity = {description: 'Standard acceleration of gravity (standard acceleration of free-fall on Earth)', examples: ['gravity']};

  docs.planckLength = {description: 'Planck length', examples: ['planckLength']};
  docs.planckMass = {description: 'Planck mass', examples: ['planckMass']};
  docs.planckTime = {description: 'Planck time', examples: ['planckTime']};
  docs.planckCharge = {description: 'Planck charge', examples: ['planckCharge']};
  docs.planckTemperature = {description: 'Planck temperature', examples: ['planckTemperature']};

  // functions - algebra
  docs.derivative = require('mathjs/lib/expression/embeddedDocs/function/algebra/derivative');
  docs.lsolve = require('mathjs/lib/expression/embeddedDocs/function/algebra/lsolve');
  docs.lup = require('mathjs/lib/expression/embeddedDocs/function/algebra/lup');
  docs.lusolve = require('mathjs/lib/expression/embeddedDocs/function/algebra/lusolve');
  docs.simplify = require('mathjs/lib/expression/embeddedDocs/function/algebra/simplify');
  docs.rationalize = require('mathjs/lib/expression/embeddedDocs/function/algebra/rationalize');
  docs.slu = require('mathjs/lib/expression/embeddedDocs/function/algebra/slu');
  docs.usolve = require('mathjs/lib/expression/embeddedDocs/function/algebra/usolve');
  docs.qr = require('mathjs/lib/expression/embeddedDocs/function/algebra/qr');

  // functions - arithmetic
  docs.abs = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/abs');
  docs.add = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/add');
  docs.cbrt = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/cbrt');
  docs.ceil = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/ceil');
  docs.cube = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/cube');
  docs.divide = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/divide');
  docs.dotDivide = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/dotDivide');
  docs.dotMultiply = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/dotMultiply');
  docs.dotPow = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/dotPow');
  docs.exp = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/exp');
  docs.expm = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/expm');
  docs.expm1 = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/expm1');
  docs.fix = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/fix');
  docs.floor = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/floor');
  docs.gcd = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/gcd');
  docs.hypot = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/hypot');
  docs.lcm = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/lcm');
  docs.log = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/log');
  docs.log2 = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/log2');
  docs.log1p = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/log1p');
  docs.log10 = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/log10');
  docs.mod = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/mod');
  docs.multiply = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/multiply');
  docs.norm = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/norm');
  docs.nthRoot = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/nthRoot');
  docs.pow = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/pow');
  docs.round = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/round');
  docs.sign = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/sign');
  docs.sqrt = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/sqrt');
  docs.sqrtm = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/sqrtm');
  docs.square = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/square');
  docs.subtract = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/subtract');
  docs.unaryMinus = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/unaryMinus');
  docs.unaryPlus = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/unaryPlus');
  docs.xgcd = require('mathjs/lib/expression/embeddedDocs/function/arithmetic/xgcd');

  // functions - bitwise
  docs.bitAnd = require('mathjs/lib/expression/embeddedDocs/function/bitwise/bitAnd');
  docs.bitNot = require('mathjs/lib/expression/embeddedDocs/function/bitwise/bitNot');
  docs.bitOr = require('mathjs/lib/expression/embeddedDocs/function/bitwise/bitOr');
  docs.bitXor = require('mathjs/lib/expression/embeddedDocs/function/bitwise/bitXor');
  docs.leftShift = require('mathjs/lib/expression/embeddedDocs/function/bitwise/leftShift');
  docs.rightArithShift = require('mathjs/lib/expression/embeddedDocs/function/bitwise/rightArithShift');
  docs.rightLogShift = require('mathjs/lib/expression/embeddedDocs/function/bitwise/rightLogShift');

  // functions - combinatorics
  docs.bellNumbers = require('mathjs/lib/expression/embeddedDocs/function/combinatorics/bellNumbers');
  docs.catalan = require('mathjs/lib/expression/embeddedDocs/function/combinatorics/catalan');
  docs.composition = require('mathjs/lib/expression/embeddedDocs/function/combinatorics/composition');
  docs.stirlingS2 = require('mathjs/lib/expression/embeddedDocs/function/combinatorics/stirlingS2');

  // functions - core
  docs['config'] =  require('mathjs/lib/expression/embeddedDocs/core/config');
  docs['import'] =  require('mathjs/lib/expression/embeddedDocs/core/import');
  docs['typed'] =  require('mathjs/lib/expression/embeddedDocs/core/typed');

  // functions - complex
  docs.arg = require('mathjs/lib/expression/embeddedDocs/function/complex/arg');
  docs.conj = require('mathjs/lib/expression/embeddedDocs/function/complex/conj');
  docs.re = require('mathjs/lib/expression/embeddedDocs/function/complex/re');
  docs.im = require('mathjs/lib/expression/embeddedDocs/function/complex/im');

  // functions - expression
  docs['eval'] =  require('mathjs/lib/expression/embeddedDocs/function/expression/eval');
  docs.help =  require('mathjs/lib/expression/embeddedDocs/function/expression/help');

  // functions - geometry
  docs.distance = require('mathjs/lib/expression/embeddedDocs/function/geometry/distance');
  docs.intersect = require('mathjs/lib/expression/embeddedDocs/function/geometry/intersect');

  // functions - logical
  docs['and'] = require('mathjs/lib/expression/embeddedDocs/function/logical/and');
  docs['not'] = require('mathjs/lib/expression/embeddedDocs/function/logical/not');
  docs['or'] = require('mathjs/lib/expression/embeddedDocs/function/logical/or');
  docs['xor'] = require('mathjs/lib/expression/embeddedDocs/function/logical/xor');

  // functions - matrix
  docs['concat'] = require('mathjs/lib/expression/embeddedDocs/function/matrix/concat');
  docs.cross = require('mathjs/lib/expression/embeddedDocs/function/matrix/cross');
  docs.det = require('mathjs/lib/expression/embeddedDocs/function/matrix/det');
  docs.diag = require('mathjs/lib/expression/embeddedDocs/function/matrix/diag');
  docs.dot = require('mathjs/lib/expression/embeddedDocs/function/matrix/dot');
  docs.eye = require('mathjs/lib/expression/embeddedDocs/function/matrix/eye');
  docs.filter =  require('mathjs/lib/expression/embeddedDocs/function/matrix/filter');
  docs.flatten = require('mathjs/lib/expression/embeddedDocs/function/matrix/flatten');
  docs.forEach =  require('mathjs/lib/expression/embeddedDocs/function/matrix/forEach');
  docs.inv = require('mathjs/lib/expression/embeddedDocs/function/matrix/inv');
  docs.kron = require('mathjs/lib/expression/embeddedDocs/function/matrix/kron');
  docs.map =  require('mathjs/lib/expression/embeddedDocs/function/matrix/map');
  docs.ones = require('mathjs/lib/expression/embeddedDocs/function/matrix/ones');
  docs.partitionSelect =  require('mathjs/lib/expression/embeddedDocs/function/matrix/partitionSelect');
  docs.range = require('mathjs/lib/expression/embeddedDocs/function/matrix/range');
  docs.resize = require('mathjs/lib/expression/embeddedDocs/function/matrix/resize');
  docs.reshape = require('mathjs/lib/expression/embeddedDocs/function/matrix/reshape');
  docs.size = require('mathjs/lib/expression/embeddedDocs/function/matrix/size');
  docs.sort =  require('mathjs/lib/expression/embeddedDocs/function/matrix/sort');
  docs.squeeze = require('mathjs/lib/expression/embeddedDocs/function/matrix/squeeze');
  docs.subset = require('mathjs/lib/expression/embeddedDocs/function/matrix/subset');
  docs.trace = require('mathjs/lib/expression/embeddedDocs/function/matrix/trace');
  docs.transpose = require('mathjs/lib/expression/embeddedDocs/function/matrix/transpose');
  docs.zeros = require('mathjs/lib/expression/embeddedDocs/function/matrix/zeros');

  // functions - probability
  docs.combinations = require('mathjs/lib/expression/embeddedDocs/function/probability/combinations');
  //docs.distribution = require('mathjs/lib/expression/embeddedDocs/function/probability/distribution');
  docs.factorial = require('mathjs/lib/expression/embeddedDocs/function/probability/factorial');
  docs.gamma = require('mathjs/lib/expression/embeddedDocs/function/probability/gamma');
  docs.kldivergence = require('mathjs/lib/expression/embeddedDocs/function/probability/kldivergence');
  docs.multinomial = require('mathjs/lib/expression/embeddedDocs/function/probability/multinomial');
  docs.permutations = require('mathjs/lib/expression/embeddedDocs/function/probability/permutations');
  docs.pickRandom = require('mathjs/lib/expression/embeddedDocs/function/probability/pickRandom');
  docs.random = require('mathjs/lib/expression/embeddedDocs/function/probability/random');
  docs.randomInt = require('mathjs/lib/expression/embeddedDocs/function/probability/randomInt');

  // functions - relational
  docs.compare = require('mathjs/lib/expression/embeddedDocs/function/relational/compare');
  docs.compareNatural = require('mathjs/lib/expression/embeddedDocs/function/relational/compareNatural');
  docs.compareText = require('mathjs/lib/expression/embeddedDocs/function/relational/compareText');
  docs.deepEqual = require('mathjs/lib/expression/embeddedDocs/function/relational/deepEqual');
  docs['equal'] = require('mathjs/lib/expression/embeddedDocs/function/relational/equal');
  docs.equalText = require('mathjs/lib/expression/embeddedDocs/function/relational/equalText');
  docs.larger = require('mathjs/lib/expression/embeddedDocs/function/relational/larger');
  docs.largerEq = require('mathjs/lib/expression/embeddedDocs/function/relational/largerEq');
  docs.smaller = require('mathjs/lib/expression/embeddedDocs/function/relational/smaller');
  docs.smallerEq = require('mathjs/lib/expression/embeddedDocs/function/relational/smallerEq');
  docs.unequal = require('mathjs/lib/expression/embeddedDocs/function/relational/unequal');

  // functions - set
  docs.setCartesian = require('mathjs/lib/expression/embeddedDocs/function/set/setCartesian');
  docs.setDifference = require('mathjs/lib/expression/embeddedDocs/function/set/setDifference');
  docs.setDistinct = require('mathjs/lib/expression/embeddedDocs/function/set/setDistinct');
  docs.setIntersect = require('mathjs/lib/expression/embeddedDocs/function/set/setIntersect');
  docs.setIsSubset = require('mathjs/lib/expression/embeddedDocs/function/set/setIsSubset');
  docs.setMultiplicity = require('mathjs/lib/expression/embeddedDocs/function/set/setMultiplicity');
  docs.setPowerset = require('mathjs/lib/expression/embeddedDocs/function/set/setPowerset');
  docs.setSize = require('mathjs/lib/expression/embeddedDocs/function/set/setSize');
  docs.setSymDifference = require('mathjs/lib/expression/embeddedDocs/function/set/setSymDifference');
  docs.setUnion = require('mathjs/lib/expression/embeddedDocs/function/set/setUnion');

  // functions - special
  docs.erf = require('mathjs/lib/expression/embeddedDocs/function/special/erf');

  // functions - statistics
  docs.mad = require('mathjs/lib/expression/embeddedDocs/function/statistics/mad');
  docs.max = require('mathjs/lib/expression/embeddedDocs/function/statistics/max');
  docs.mean = require('mathjs/lib/expression/embeddedDocs/function/statistics/mean');
  docs.median = require('mathjs/lib/expression/embeddedDocs/function/statistics/median');
  docs.min = require('mathjs/lib/expression/embeddedDocs/function/statistics/min');
  docs.mode = require('mathjs/lib/expression/embeddedDocs/function/statistics/mode');
  docs.prod = require('mathjs/lib/expression/embeddedDocs/function/statistics/prod');
  docs.quantileSeq = require('mathjs/lib/expression/embeddedDocs/function/statistics/quantileSeq');
  docs.std = require('mathjs/lib/expression/embeddedDocs/function/statistics/std');
  docs.sum = require('mathjs/lib/expression/embeddedDocs/function/statistics/sum');
  docs['var'] = require('mathjs/lib/expression/embeddedDocs/function/statistics/var');

  // functions - trigonometry
  docs.acos = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acos');
  docs.acosh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acosh');
  docs.acot = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acot');
  docs.acoth = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acoth');
  docs.acsc = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acsc');
  docs.acsch = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/acsch');
  docs.asec = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/asec');
  docs.asech = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/asech');
  docs.asin = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/asin');
  docs.asinh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/asinh');
  docs.atan = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/atan');
  docs.atanh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/atanh');
  docs.atan2 = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/atan2');
  docs.cos = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/cos');
  docs.cosh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/cosh');
  docs.cot = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/cot');
  docs.coth = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/coth');
  docs.csc = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/csc');
  docs.csch = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/csch');
  docs.sec = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/sec');
  docs.sech = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/sech');
  docs.sin = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/sin');
  docs.sinh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/sinh');
  docs.tan = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/tan');
  docs.tanh = require('mathjs/lib/expression/embeddedDocs/function/trigonometry/tanh');

  // functions - units
  docs.to = require('mathjs/lib/expression/embeddedDocs/function/units/to');

  // functions - utils
  docs.clone = require('mathjs/lib/expression/embeddedDocs/function/utils/clone');
  docs.format = require('mathjs/lib/expression/embeddedDocs/function/utils/format');
  docs.isNaN = require('mathjs/lib/expression/embeddedDocs/function/utils/isNaN');
  docs.isInteger = require('mathjs/lib/expression/embeddedDocs/function/utils/isInteger');
  docs.isNegative = require('mathjs/lib/expression/embeddedDocs/function/utils/isNegative');
  docs.isNumeric = require('mathjs/lib/expression/embeddedDocs/function/utils/isNumeric');
  docs.isPositive = require('mathjs/lib/expression/embeddedDocs/function/utils/isPositive');
  docs.isPrime = require('mathjs/lib/expression/embeddedDocs/function/utils/isPrime');
  docs.isZero = require('mathjs/lib/expression/embeddedDocs/function/utils/isZero');
  // docs.print = require('mathjs/lib/expression/embeddedDocs/function/utils/print'); // TODO: add documentation for print as soon as the parser supports objects.
  docs['typeof'] =  require('mathjs/lib/expression/embeddedDocs/function/utils/typeof');

  return docs;
}

exports.name = 'docs';
exports.path = 'expression';
exports.factory = factory;

require = requireOrig;});
