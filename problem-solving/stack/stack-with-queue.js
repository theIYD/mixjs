class StackWithQueue {
  constructor() {
    this.queue = [];
  }

  push(val) {
    let size = this.queue.length;
    this.queue.push(val);

    for (let i = 0; i < size; i++) {
      let x = this.queue.shift();
      this.queue.push(x);
    }
  }

  pop() {
    if (this.queue.length === 0) {
      return undefined;
    }

    return this.queue.shift();
  }
}
