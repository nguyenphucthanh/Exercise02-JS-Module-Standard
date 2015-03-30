define(function(require, exports, module) {
	function plus(a, b) {
		return a + b;
	}
	function multiply(a, b) {
		return a * b;
	}
	exports.plus = plus;
	exports.multiply = multiply;

	/*
		//OR this way if you don't want to use 'exports'
		return {
			plus: plus,
			multiply: multiply
		};
	*/
});