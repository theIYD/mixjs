// A simple store for DOM elements
// Not allowed to use Map

class NodeStore {
  constructor() {
    this.store = {};
  }

  set(node, value) {
    node.storeKey = Symbol();
    this.store[node.storeKey] = value;
  }

  get(node) {
    return this.store[node.storeKey];
  }

  has(node) {
    return !!this.store[node.storeKey];
  }
}
