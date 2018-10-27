
define([
    "mathjs/test/approx.test",
    "mathjs/test/constants.test",
    "mathjs/test/deprecated.test",
    "mathjs/test/index.test",
    "mathjs/test/core/config.test",
    "mathjs/test/core/import.test",
    "mathjs/test/core/index.test",
    "mathjs/test/core/typed.test",
    "mathjs/test/error/ArgumentsError.test",
    "mathjs/test/error/DimensionError.test",
    "mathjs/test/error/IndexError.test",
    "mathjs/test/error/index.test",
    "mathjs/test/expression/Help.test",
    "mathjs/test/expression/Parser.test",
    "mathjs/test/expression/keywords.test",
    "mathjs/test/expression/operators.test",
    "mathjs/test/expression/parse.test",
    "mathjs/test/expression/security.test",
    "mathjs/test/expression/transforms.test",
    "mathjs/test/expression/function/compile.test",
    "mathjs/test/expression/function/eval.test",
    "mathjs/test/expression/function/help.test",
    "mathjs/test/expression/function/parser.test",
    "mathjs/test/expression/function/parse.test",
    "mathjs/test/expression/node/AccessorNode.test",
    "mathjs/test/expression/node/ConditionalNode.test",
    "mathjs/test/expression/node/IndexNode.test",
    "mathjs/test/expression/node/OperatorNode.test",
    "mathjs/test/expression/node/ArrayNode.test",
    "mathjs/test/expression/node/ConstantNode.test",
    "mathjs/test/expression/node/index.test",
    "mathjs/test/expression/node/ParenthesisNode.test",
    "mathjs/test/expression/node/AssignmentNode.test",
    "mathjs/test/expression/node/FunctionAssignmentNode.test",
    "mathjs/test/expression/node/Node.test",
    "mathjs/test/expression/node/RangeNode.test",
    "mathjs/test/expression/node/BlockNode.test",
    "mathjs/test/expression/node/FunctionNode.test",
    "mathjs/test/expression/node/ObjectNode.test",
    "mathjs/test/expression/node/SymbolNode.test",
    "mathjs/test/function/algebra/derivative.test",
    "mathjs/test/function/algebra/rationalize.test",
    "mathjs/test/function/algebra/simplify.test",
    "mathjs/test/function/algebra/decomposition/lup.test",
    "mathjs/test/function/algebra/decomposition/qr.test",
    "mathjs/test/function/algebra/decomposition/slu.test",
    "mathjs/test/function/algebra/solver/lsolve.test",
    "mathjs/test/function/algebra/solver/lusolve.test",
    "mathjs/test/function/algebra/solver/usolve.test",
    "mathjs/test/function/algebra/sparse/cs_lu.test",
    "mathjs/test/function/arithmetic/abs.test",
    "mathjs/test/function/arithmetic/addScalar.test",
    "mathjs/test/function/arithmetic/add.test",
    "mathjs/test/function/arithmetic/cbrt.test",
    "mathjs/test/function/arithmetic/ceil.test",
    "mathjs/test/function/arithmetic/cube.test",
    "mathjs/test/function/arithmetic/divide.test",
    "mathjs/test/function/arithmetic/dotDivide.test",
    "mathjs/test/function/arithmetic/dotMultiply.test",
    "mathjs/test/function/arithmetic/dotPow.test",
    "mathjs/test/function/arithmetic/expm1.test",
    "mathjs/test/function/arithmetic/exp.test",
    "mathjs/test/function/arithmetic/fix.test",
    "mathjs/test/function/arithmetic/floor.test",
    "mathjs/test/function/arithmetic/gcd.test",
    "mathjs/test/function/arithmetic/hypot.test",
    "mathjs/test/function/arithmetic/lcm.test",
    "mathjs/test/function/arithmetic/log10.test",
    "mathjs/test/function/arithmetic/log1p.test",
    "mathjs/test/function/arithmetic/log2.test",
    "mathjs/test/function/arithmetic/log.test",
    "mathjs/test/function/arithmetic/mod.test",
    "mathjs/test/function/arithmetic/multiply.test",
    "mathjs/test/function/arithmetic/norm.test",
    "mathjs/test/function/arithmetic/nthRoot.test",
    "mathjs/test/function/arithmetic/pow.test",
    "mathjs/test/function/arithmetic/round.test",
    "mathjs/test/function/arithmetic/sign.test",
    "mathjs/test/function/arithmetic/sqrt.test",
    "mathjs/test/function/arithmetic/square.test",
    "mathjs/test/function/arithmetic/subtract.test",
    "mathjs/test/function/arithmetic/unaryMinus.test",
    "mathjs/test/function/arithmetic/unaryPlus.test",
    "mathjs/test/function/arithmetic/xgcd.test",
    "mathjs/test/function/bitwise/bitAnd.test",
    "mathjs/test/function/bitwise/bitNot.test",
    "mathjs/test/function/bitwise/bitOr.test",
    "mathjs/test/function/bitwise/bitXor.test",
    "mathjs/test/function/bitwise/leftShift.test",
    "mathjs/test/function/bitwise/rightArithShift.test",
    "mathjs/test/function/bitwise/rightLogShift.test",
    "mathjs/test/function/combinatorics/bellNumbers.test",
    "mathjs/test/function/combinatorics/catalan.test",
    "mathjs/test/function/combinatorics/composition.test",
    "mathjs/test/function/combinatorics/stirlingS2.test",
    "mathjs/test/function/complex/arg.test",
    "mathjs/test/function/complex/conj.test",
    "mathjs/test/function/complex/im.test",
    "mathjs/test/function/complex/re.test",
    "mathjs/test/function/geometry/distance.test",
    "mathjs/test/function/geometry/intersect.test",
    "mathjs/test/function/logical/and.test",
    "mathjs/test/function/logical/not.test",
    "mathjs/test/function/logical/or.test",
    "mathjs/test/function/logical/xor.test",
    "mathjs/test/function/matrix/concat.test",
    "mathjs/test/function/matrix/cross.test",
    "mathjs/test/function/matrix/det.test",
    "mathjs/test/function/matrix/diag.test",
    "mathjs/test/function/matrix/dot.test",
    "mathjs/test/function/matrix/expm.test",
    "mathjs/test/function/matrix/eye.test",
    "mathjs/test/function/matrix/filter.test",
    "mathjs/test/function/matrix/flatten.test",
    "mathjs/test/function/matrix/forEach.test",
    "mathjs/test/function/matrix/inv.test",
    "mathjs/test/function/matrix/kron.test",
    "mathjs/test/function/matrix/map.test",
    "mathjs/test/function/matrix/ones.test",
    "mathjs/test/function/matrix/partitionSelect.test",
    "mathjs/test/function/matrix/range.test",
    "mathjs/test/function/matrix/reshape.test",
    "mathjs/test/function/matrix/resize.test",
    "mathjs/test/function/matrix/size.test",
    "mathjs/test/function/matrix/sort.test",
    "mathjs/test/function/matrix/sqrtm.test",
    "mathjs/test/function/matrix/squeeze.test",
    "mathjs/test/function/matrix/subset.test",
    "mathjs/test/function/matrix/trace.test",
    "mathjs/test/function/matrix/transpose.test",
    "mathjs/test/function/matrix/zeros.test",
    "mathjs/test/function/probability/combinations.test",
    "mathjs/test/function/probability/distribution.test",
    "mathjs/test/function/probability/factorial.test",
    "mathjs/test/function/probability/gamma.test",
    "mathjs/test/function/probability/kldivergence.test",
    "mathjs/test/function/probability/multinomial.test",
    "mathjs/test/function/probability/permutations.test",
    "mathjs/test/function/probability/pickRandom.test",
    "mathjs/test/function/probability/randomInt.test",
    "mathjs/test/function/probability/random.test",
    "mathjs/test/function/probability/seededrandom.test",
    "mathjs/test/function/relational/compareNatural.test",
    "mathjs/test/function/relational/compare.test",
    "mathjs/test/function/relational/compareText.test",
    "mathjs/test/function/relational/deepEqual.test",
    "mathjs/test/function/relational/equal.test",
    "mathjs/test/function/relational/equalText.test",
    "mathjs/test/function/relational/largerEq.test",
    "mathjs/test/function/relational/larger.test",
    "mathjs/test/function/relational/smallerEq.test",
    "mathjs/test/function/relational/smaller.test",
    "mathjs/test/function/relational/unequal.test",
    "mathjs/test/function/set/setCartesian.test",
    "mathjs/test/function/set/setDifference.test",
    "mathjs/test/function/set/setDistinct.test",
    "mathjs/test/function/set/setIntersect.test",
    "mathjs/test/function/set/setIsSubset.test",
    "mathjs/test/function/set/setMultiplicity.test",
    "mathjs/test/function/set/setPowerset.test",
    "mathjs/test/function/set/setSize.test",
    "mathjs/test/function/set/setSymDifference.test",
    "mathjs/test/function/set/setUnion.test",
    "mathjs/test/function/special/erf.test",
    "mathjs/test/function/statistics/mad.test",
    "mathjs/test/function/statistics/max.test",
    "mathjs/test/function/statistics/mean.test",
    "mathjs/test/function/statistics/median.test",
    "mathjs/test/function/statistics/min.test",
    "mathjs/test/function/statistics/mode.test",
    "mathjs/test/function/statistics/prod.test",
    "mathjs/test/function/statistics/quantileSeq.test",
    "mathjs/test/function/statistics/std.test",
    "mathjs/test/function/statistics/sum.test",
    "mathjs/test/function/statistics/var.test",
    "mathjs/test/function/string/format.test",
    "mathjs/test/function/string/print.test",
    "mathjs/test/function/trigonometry/acosh.test",
    "mathjs/test/function/trigonometry/acos.test",
    "mathjs/test/function/trigonometry/acoth.test",
    "mathjs/test/function/trigonometry/acot.test",
    "mathjs/test/function/trigonometry/acsch.test",
    "mathjs/test/function/trigonometry/acsc.test",
    "mathjs/test/function/trigonometry/asech.test",
    "mathjs/test/function/trigonometry/asec.test",
    "mathjs/test/function/trigonometry/asinh.test",
    "mathjs/test/function/trigonometry/asin.test",
    "mathjs/test/function/trigonometry/atan2.test",
    "mathjs/test/function/trigonometry/atanh.test",
    "mathjs/test/function/trigonometry/atan.test",
    "mathjs/test/function/trigonometry/cosh.test",
    "mathjs/test/function/trigonometry/cos.test",
    "mathjs/test/function/trigonometry/coth.test",
    "mathjs/test/function/trigonometry/cot.test",
    "mathjs/test/function/trigonometry/csch.test",
    "mathjs/test/function/trigonometry/csc.test",
    "mathjs/test/function/trigonometry/sech.test",
    "mathjs/test/function/trigonometry/sec.test",
    "mathjs/test/function/trigonometry/sinh.test",
    "mathjs/test/function/trigonometry/sin.test",
    "mathjs/test/function/trigonometry/tanh.test",
    "mathjs/test/function/trigonometry/tan.test",
    "mathjs/test/function/unit/to.test",
    "mathjs/test/function/utils/clone.test",
    "mathjs/test/function/utils/isInteger.test",
    "mathjs/test/function/utils/isNaN.test",
    "mathjs/test/function/utils/isNegative.test",
    "mathjs/test/function/utils/isNumeric.test",
    "mathjs/test/function/utils/isPositive.test",
    "mathjs/test/function/utils/isPrime.test",
    "mathjs/test/function/utils/isZero.test",
    "mathjs/test/function/utils/typeof.test",
    "mathjs/test/json/replacer.test",
    "mathjs/test/json/reviver.test",
    "mathjs/test/type/boolean.test",
    "mathjs/test/type/number.test",
    "mathjs/test/type/string.test",
    /* JSC
    "mathjs/test/type/bignumber/BigNumber.test",
    "mathjs/test/type/bignumber/function/bignumber.test",
    */
    "mathjs/test/type/chain/Chain.test",
    "mathjs/test/type/chain/function/chain.test",
    "mathjs/test/type/complex/Complex.test",
    "mathjs/test/type/complex/function/complex.test",
    "mathjs/test/type/fraction/Fraction.test",
    "mathjs/test/type/fraction/function/fraction.test",
    "mathjs/test/type/matrix/collection.test",
    "mathjs/test/type/matrix/DenseMatrix.test",
    "mathjs/test/type/matrix/FibonacciHeap.test",
    "mathjs/test/type/matrix/ImmutableDenseMatrix.test",
    "mathjs/test/type/matrix/Index.test",
    "mathjs/test/type/matrix/Matrix.test",
    "mathjs/test/type/matrix/Range.test",
    "mathjs/test/type/matrix/SparseMatrix.test",
    "mathjs/test/type/matrix/Spa.test",
    "mathjs/test/type/matrix/function/index.test",
    "mathjs/test/type/matrix/function/matrix.test",
    "mathjs/test/type/matrix/function/sparse.test",
    "mathjs/test/type/resultset/ResultSet.test",
    "mathjs/test/type/unit/Unit.test",
    "mathjs/test/type/unit/physicalConstants.test",
    "mathjs/test/type/unit/function/createUnit.test",
    "mathjs/test/type/unit/function/splitUnit.test",
    "mathjs/test/type/unit/function/unit.test",
    "mathjs/test/utils/array.test",
    "mathjs/test/utils/boolean.test",
    "mathjs/test/utils/customs.test",
    "mathjs/test/utils/function.test",
    "mathjs/test/utils/latex.test",
    "mathjs/test/utils/number.test",
    "mathjs/test/utils/object.test",
    "mathjs/test/utils/string.test"
    /* JSC
    "mathjs/test/utils/bignumber/constants.test",
    "mathjs/test/utils/bignumber/formatter.test",
    "mathjs/test/utils/bignumber/nearlyEqual.test"
    */
], function() {
    return {
        main: function() {
        }
    };
});
