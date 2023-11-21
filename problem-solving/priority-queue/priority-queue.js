const Node = require("./Node");

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    var index = this.values.length - 1;
    var element = this.values[index];

    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      if (element.priority >= this.values[parentIndex].priority) break;
      var parent = this.values[parentIndex];
      this.values[parentIndex] = element;
      this.values[element] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    var min = this.values[0];
    var end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
    }
    this.sinkDown();
    return min;
  }

  sinkDown() {
    var index = 0;
    var length = this.values.length - 1;
    var element = this.values[index];

    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      var leftChild,
        rightChild,
        swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
