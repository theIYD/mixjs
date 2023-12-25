class Stream {
  constructor() {
    this.subscriptions = [];
  }

  subscribe(fn) {
    if (typeof method !== "function") {
      throw new Error("Invalid method!.");
    }

    this.subscriptions.push(fn);
  }

  push(value) {
    for (let subscriptionFn of subscriptions) {
      subscriptionFn.call(this, value);
    }
  }
}
