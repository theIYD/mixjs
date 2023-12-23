class StackMinMax {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push({
        value: val,
        max: val,
        min: val,
      });
    } else {
      const last = this.stack[this.stack.length - 1];
      const { min, max } = last;

      min = Math.min(min, val);
      max = Math.max(max, val);

      this.stack.push({
        value: val,
        min,
        max,
      });
    }
  }

  pop() {
    return this.stack[this.stack.length - 1];
  }
}
