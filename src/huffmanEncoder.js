const { Heap } = require("./Heap");
const { stringUtils } = require("./utils/stringUtils")

class huffmanNode {
	constructor({ char, freq }) {
		this.char = char;
		this.freq = freq;
	}
}

function createFreqObj(string) {
	return stringUtils.lexicSorter(stringUtils.getCharFrequency(string));
}

function createMinHeap(freqObj) {
	let minHeap = new Heap((a, b) => { return (a.freq - b.freq); });
	for (let i = 0; i < freqObj.length; i++) {
		minHeap.add(new huffmanNode(freqObj[i]));
	}
	return minHeap;
}

function createHuffmanTree(minHeap) {
	while (minHeap.peek() != null) {
		let left = minHeap.remove();
		let right = minHeap.remove();
		if(right == null) return left;
		let newNode = new huffmanNode({ char: null, freq: left.freq + right.freq });
		newNode.left = left;
		newNode.right = right;
		minHeap.add(newNode);
	}
	return minHeap.peek();
}


function decodeHuffmanTree(root) {
	let huffmanObj = [];
	decodeHuffmanHelper(root, "")
	function decodeHuffmanHelper(node, string) {
		//no need to check if node is null or not since all huffman trees are full trees
		if (node.left == null && node.right == null) {
			huffmanObj.push({ char: node.char, value: string });
			return;
		}
		decodeHuffmanHelper(node.left, string + "0");
		decodeHuffmanHelper(node.right, string + "1");
	}
	return huffmanObj;
}

	/**
	 * 
	 * @param {String} string The String to be encoded with huffman compression
	 */
	function huffmanEncoder(string) {
		let freqObj = createFreqObj(string);
		let minHeap = createMinHeap(freqObj);
		let huffmanTree = createHuffmanTree(minHeap);
		return decodeHuffmanTree(huffmanTree);
	}



module.exports = { huffmanEncoder }
