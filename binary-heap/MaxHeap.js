class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		this.bubble();
	}

	bubble() {
		/*
			1. parentIndex = (n - 1) / 2
			2. Check if value at parent is less than value at current index
			3. If step 2 is true, swap the values and update the current index with parent
		 */
		var index = this.values.length - 1;

		while(index > 0) {
			var parentIndex = Math.floor((index - 1) / 2);	

			if(this.values[parentIndex] >= this.values[index]) break;
			this.swap(this.values[parentIndex], this.values[index]);
			index = parentIndex;
		}
	}

	extractMax() {
		var max = this.values[0];
		var end = this.values.pop();
		if(this.values.length > 0) {
			this.values[0] = end;
		}
		this.sinkDown();
		return max;

	}

	sinkDown() {
		var index = 0;
		var length = this.values.length;
		var element = this.values[0];

		while(true) {
			var leftChildIndex = 2 * index + 1;
			var rightChildIndex = 2 * index + 2;
			var leftChild, rightChild, swap = null;

			if(leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if(leftChild > element) {
					swap = leftChildIndex;
				}
			}

			if(rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIndex;
				}
			}

			if(swap === null) break;
			this.swap(index, swap);
			index = swap;
		}
	}

	swap(a, b) {
		var temp = a;
		a = b;
		b = temp;
	}
}

