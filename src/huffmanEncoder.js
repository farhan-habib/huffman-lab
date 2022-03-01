const { Heap } = require("./Heap");
const { stringUtils } = require("./utils/stringUtils")

huffmanEncoder = class {
	static #huffmanNode = class {
		constructor({ char, freq }) {
			this.char = char;
			this.freq = freq;
		}
	}
	static #createFreqObj(string) {
		return stringUtils.lexicSorter(stringUtils.getCharFrequency(string));
	}
	static #createMinHeap(freqObj) {
		let minHeap = new Heap((a, b) => { return (a.freq - b.freq); });
		for (let i = 0; i < freqObj.length; i++) {
			minHeap.add(new this.#huffmanNode(freqObj[i]));
		}
		return minHeap;
	}
	//takes a heap and makes a huffmantree
	static #createHuffmanTree(minHeap) {
		while (minHeap.peek() != null) {
			let left = minHeap.remove();
			let right = minHeap.remove();
			if(right == null) return left;
			let newNode = new this.#huffmanNode({ char: null, freq: left.freq + right.freq });
			newNode.left = left;
			newNode.right = right;
			minHeap.add(newNode);
		}
		return minHeap.peek();
	}
	static #decodeHuffmanTree(root) {
		let huffmanObj = [];
		decodeHuffmanHelper(root, "")

		function decodeHuffmanHelper(node, string) {
			if (node.left == null && node.right == null && node.char !== null) {
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
	static encode(string) {
		let freqObj = this.#createFreqObj(string);
		let minHeap = this.#createMinHeap(freqObj);
		let huffmanTree = this.#createHuffmanTree(minHeap);
		return this.#decodeHuffmanTree(huffmanTree);
	}
}



module.exports = { huffmanEncoder }
