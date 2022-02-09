const { Heap } = require("./Heap");
const { stringUtils } = require("./utils/stringUtils");

let arguments = process.argv.splice(2);

let options = {}

let argmap = [
	{ flag: "-o", name: "outputFile", length: 2 },
]

for (let i = 0; i < arguments.length; i++) {
	for (let j = 0; j < argmap.length; j++) {

		if (argmap[j].flag == arguments[i]) {
			let arr = arguments.splice(i, argmap[j].length);
			arr.shift();
			options[argmap[j].name] = arr;
		}
	}
}

/**
let text = "XNSRZFYVFJJJUDGCTZPSQICCCZISIQHKQZOFSIWKMKDVNWUDWLOSVTDTRVYFSKDQAPWVMHTREURYFKPMKQWKTXYTCBSGOVCCKOHV";
let freqObj = stringUtils.getCharFrequency(text);
freqObj = stringUtils.frequencySorter(freqObj);
// console.log(freqObj);

let comparator = function (a, b) {
	return (a.freq - b.freq);
}
let huffmanHeap = new Heap(comparator);

let huffmanNode = class {
	constructor({ char, freq }) {
		this.char = char;
		this.freq = freq;
	}
}
for (let i = 0; i < freqObj.length; i++) {
	huffmanHeap.add(new huffmanNode(freqObj[i]));
}
huffmanHeap.remove();
// huffmanHeap.debug();
**/

let x = new Heap((a, b) => { return a - b });

x.add(1);
x.add(2);
x.add(0);
x.add(29);
x.add(130)
x.remove();
x.debug();