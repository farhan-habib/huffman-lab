const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const { Heap } = require("./Heap");
const { huffmanEncoder } = require("./huffmanEncoder");
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



let huff = huffmanEncoder.encode("Shipping ships ship ships");

console.log(huff);
// async function huffmanEncodeFile(filePath) {

// 	let data = await fsPromises.readFile(filePath);
// 	let huffmanData = huffmanEncoder.encode(data.toString());
// 	console.log(huffmanData);
// }
// let filepath = arguments.shift();
// huffmanEncodeFile(filepath);

// let x = new Heap((a, b) => { return a - b });

// x.add(1);
// x.add(2);
// x.remove();
// x.add(4);
// x.add(3);
// x.add(2);

// console.log(x.debug());


function testaddHelper(arr) {
	let str = "";
	function log(strToAdd) {
		str += "\n" + strToAdd;
	}
	log(`
	-----------------------------------------------------
	TESTING INPUT ARRAY: [${arr.toString()}]
	-----------------------------------------------------
	`)
	let heap = new Heap((a, b) => { return a - b })
	for (const val of arr) {
		heap.add(val);
	}
	log(`Full Heap: [${heap.debug()}]`);
	log(`

	TESTING REMOVE:

	`)
	do {
		log("Removing:" + heap.remove());
		log(`${[heap.debug()]}`);
	} while (heap.peek())
	log(`
	┌───────────────┐
	│  end of test  │
	└───────────────┘
	`)
	return str;
}

//testing;
let maxValue = 6;
let outputOfTest = "";
for (let i = 0; i < maxValue; i++) {
	let arr = [];
	for (let arrAdder = 1; arrAdder <= i + 1; arrAdder++) {
		arr.push(maxValue - arrAdder);
	}
	outputOfTest += "\n\n\n" + testaddHelper(arr) + "\n\n\n";
}

fs.writeFile("TESTFILE.txt", outputOfTest, function (err) {
	if (err) {
		return console.log(err);
	}
});