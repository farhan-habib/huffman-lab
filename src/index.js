const fs = require("fs");
const path = require("path");
const { Heap } = require("./Heap");
const { huffmanEncoder } = require("./huffmanEncoder");
const { argumentParser } = require("./utils/argumentParser");
const { stringUtils } = require("./utils/stringUtils");

let options = argumentParser.parseArguments(process.argv);
console.log(options);
if(options.inputFile == null || options.outputFile == null) throw new Error("No input or output file given");



let huff = huffmanEncoder.encode("Shipping ships ship ships");
console.log(huff);

process.exit();
let data = fs.readFileSync(options.inputFile, "utf8");
console.log(data);
process.exit();
	data = data.toString();
	console.log(data);

	let huffmanData = huffmanEncoder.encode(data.toString());
	console.log(huffmanData);

const filepath = "./test.txt";
// huffmanEncodeFile(filepath);


