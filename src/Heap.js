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
	debug() {
		console.log(this.#heap);
	}
}

module.exports = Heap;
