/**
 * @template T
 */
class Heap {
	#heap = [];
	constructor() {
		this.#heap = [];
	}
	/**
	 * Returns root without modifiying the heap.
	 * @returns {T} Root of the heap. Returns undefined if heap is empty.
	 */
	peek() {
		return this.#heap[0]();
	}
	/**
	 *
	 * @param {T} element The element to be added to the heap
	 * @throws Will throw if the element is undefined
	 */
	add(element) {
		if (element == undefined) {
			throw "The element can not be undefined"; //throw if undefined
		}
		this.#heap.push(element); //insert element to end of heap
		//heapify up
		let current = this.#heap.length - 1;
		let parent = Math.floor((current - 1) / 2);
		this.#heapifyup();
	}

	//Modularized functions

	#heapifyup() {
		let current = this.#heap.length - 1;
		let parent = Math.floor((current - 1) / 2);

		while (current > 0 && this.#heap[parent] > this.#heap[current]) {
			[this.#heap[parent], this.#heap[current]] = [this.#heap[current], this.#heap[parent]];
			current = parent;
			parent = Math.floor((current - 1) / 2);
		}
	}

	debug() {
		console.log(this.#heap);
	}
}

module.exports = Heap;
