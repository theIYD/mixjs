// Implement custom event emitter
class EventEmitter {
  constructor() {
    // {event => cb}
    this.callbacks = new Map();
  }

  subscribe(eventName, callback) {
    if (this.callbacks.has(eventName)) {
      this.callbacks.get(eventName).push(callback);
    } else {
      this.callbacks.set(eventName, [callback]);
    }

    return {
      release: () => {
        let releaseCB = this.callbacks.get(eventName);

        if (releaseCB) {
          releaseCB.splice(releaseCB.indexOf(callback), 1);

          if (releaseCB.length === 0) {
            // if callback array of the event is empty, delete the event
            this.callbacks.delete(eventName);
          }
        }
      },
    };
  }

  emit(event, ...args) {
    let target = this.callbacks.get(event);
    if (target) {
      for (let cb of target) {
        cb(...args);
      }
    }
  }
}
