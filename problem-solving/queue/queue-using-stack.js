class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    while (!this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack2.push(val);

    while (!this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    return this.stack1.pop();
  }

  peek() {
    return this.stack1[this.stack1.length - 1];
  }

  size() {
    return this.stack1.length;
  }

  isEmpty() {
    return this.stack1.length === 0;
  }

  clear() {
    this.stack1 = [];
    this.stack2 = [];
  }
}
