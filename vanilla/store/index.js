class Store {
  constructor() {
    this.list = {};
  }

  set(key, value) {
    this.list[key] = value;
  }

  get(key) {
    return this.list[key];
  }

  has(key) {
    return !!this.list[key];
  }
}
