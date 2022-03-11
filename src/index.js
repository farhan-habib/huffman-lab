const fs = require("fs");
const path = require("path");
const { Heap } = require("./Heap");
const { huffmanEncoder } = require("./huffmanEncoder");
const { argumentParser } = require("./utils/argumentParser");
const { stringUtils } = require("./utils/stringUtils");

let options = argumentParser.parseArguments(process.argv);
console.log(options);
if(options.inputFile == null || options.outputFile == null) throw new Error("No input or output file given");




let data = fs.readFileSync(options.inputFile, "utf8");

let huffmanData = huffmanEncoder.encode(data.toString());
const replacements = {
	"\n": "(Line Break)",
	"\t": "(Tab)",
	"\r": "(Carriage Return)",
	" ": "(Space)",
}

huffmanData = huffmanData.map(({char, value}) => {
return {char: (replacements[char] || char),value: value}
});

huffmanData.sort(function (a, b) {
	return a.char < b.char ? -1 : 1;
});


console.log(huffmanData);
let output = "---------- Huffman Dictionary ----------" + "\n";

huffmanData.forEach(({char, value}) => {
	output += `${char}\t\t${value}\n`;
});
output 	= output.substring(0, output.length-1);


fs.writeFileSync(options.outputFile, output);



