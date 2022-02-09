/**
 * @template T
 */
class Heap {
	#heap = [];

	// comparator must be a function(a,b)
	// which returns:
	// < 0 if a < b
	// = 0 if a == b
	// > 0 if a > b
	/**
	 *  Returns less than 0 if a < b, 0 if a == b, and greater than 0 if a > b
	 * @param {T} a The first element to be compared
	 * @param {T} b	The second element to be compared
	 * @throws if the comparator function has not been overwritten
	 */
	#comparator = function (a, b) {
		throw "Comparator not defined!";
	};
	/**
	 *
	 * @param {Function} comparator Must be a comparator function that returns less than 0 if a < b, 0 if a == b, and greater than 0 if a > b
	 * @throws if the comparator function is null or not defined.
	 */
	constructor(comparator) {
		if (comparator == null) {
			throw "Comparator can not be null";
		}
		this.#heap = [];
		this.#comparator = comparator;
	}
	/**
	 * Returns root without modifiying the heap.
	 * @returns {T} Root of the heap. Returns undefined if heap is empty.
	 */
	peek() {
		return this.#heap[0];
	}
	/**
	 * Sees if the heap is empty
	 * @returns {Boolean} True if the heap is empty, false otherwise.
	 */
	isEmpty() {
		return this.#heap.length === 0;
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
	/**
	 *
	 * @returns {T} The root of the heap.
	 * @throws If the heap is empty.
	 */
	remove() {
		if (this.#heap.length == 0) {
			throw "You can not remove an element from an empty heap";
		}
		if (this.#heap.length == 1) {
			return this.#heap.pop();
		}
		let root = this.#heap[0];
		this.#heap[0] = this.#heap.pop();
		this.#heapifydown();
		return root;
	}

	//Modularized functions

	#heapifyup() {
		let current = this.#heap.length - 1;
		let parent = Math.floor((current - 1) / 2);

		while (current > 0 && this.#comparator(this.#heap[parent], this.#heap[current]) > 0) {
			[this.#heap[current], this.#heap[parent]] = [this.#heap[parent], this.#heap[current]];
			current = parent;
			parent = Math.floor((current - 1) / 2);
		}
	}
	#heapifydown() {
		let current = 0;
		while (current < this.#heap.length) {
			let left = current * 2 + 1;
			let right = current * 2 + 2;
			let smallest = current;


			if (this.#heap[left] && this.#comparator(this.#heap[left], this.#heap[smallest]) < 0) {
				smallest = left;
			}

			if (this.#heap[right] && this.#comparator(this.#heap[right], this.#heap[smallest]) < 0) {
				smallest = right;
			}

			//smallest is now the smallest between current and its children
			if (smallest === current) {
				return;
			}

			[this.#heap[current], this.#heap[smallest]] = [this.#heap[smallest], this.#heap[current]];
			current = smallest;
		}
	}
	debug() {
		console.log(this.#heap);
	}

	size() {
		return this.#heap.length;
	}
}

module.exports = { Heap };
