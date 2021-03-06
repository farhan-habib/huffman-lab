stringUtils = class {


	//returns frequency of characters in a string
	static getCharFrequency(str) {
		let freq = {};
		for (let i = 0; i < str.length; i++) {
			let char = str[i];
			freq[char] = freq[char] ? freq[char] + 1 : 1;
		}
		return freq;
	}
	static lexicSorter(freqObj) {
		let freqArr = [];
		for (let key in freqObj) {
			freqArr.push({
				"char": key,
				"freq": freqObj[key]
			})
		}
		freqArr.sort(function (a, b) {
			return a.char > b.char
			return a.char.localeCompare(b.char);
		});
		return freqArr;
	}

}

module.exports = { stringUtils };