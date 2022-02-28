comparasionUtils = class {


	//static function that takes in two elements, a and b, and a comparator functions. Returns true if a is less than b, false otherwise.
	static lessThan(a, b, comparator) {
		return comparator(a, b) < 0;
	}


}

module.exports = { comparasionUtils };