class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(val) {
    let newMinMax = { min: val, max: val };
    if (this.minMaxStack.length !== 0) {
      let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax["min"] = Math.min(lastMinMax.min, val);
      newMinMax["max"] = Math.max(lastMinMax.max, val);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(val);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
