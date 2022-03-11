const fs = require("fs");
const path = require("path");
const { Heap } = require("./Heap");
const { huffmanEncoder } = require("./huffmanEncoder");
const { argumentParser } = require("./utils/argumentParser");
const { stringUtils } = require("./utils/stringUtils");

let options = argumentParser.parseArguments(process.argv);

// throw an error if there is no input or output file given, as those are necessary for the program to function properly.
if(options.inputFile == null || options.outputFile == null) throw new Error("No input or output file given");


//reads the input file
let data = fs.readFileSync(options.inputFile, "utf8").toString();

//Using the huffman compression algorithm on a string
let huffmanData = huffmanEncoder(data);

//replace certain escape sequences with their proper names
const replacements = {
	"\n": "(Line Break)",
	"\t": "(Tab)",
	"\r": "(Carriage Return)",
	" ": "(Space)",
}
huffmanData = huffmanData.map(({char, value}) => {
return {char: (replacements[char] || char),value: value}
});

//Sort the data lexigraphically before outputting it.
huffmanData.sort(function (a, b) {
	return a.char < b.char ? -1 : 1;
});

let output = "---------- Huffman Dictionary ----------" + "\n";
huffmanData.forEach(({char, value}) => {
	output += `${char}\t\t${value}\n`;
});
output 	= output.substring(0, output.length-1);

//write the output to the output file
fs.writeFileSync(options.outputFile, output);



