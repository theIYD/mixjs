function removeCycle(obj) {
  const set = new WeakSet([obj]);

  (function iterate(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (set.has(obj[key])) {
            delete obj[key];
          } else {
            set.add(obj[key]);
            iterate(obj[key]);
          }
        }
      }
    }
  })(obj);
}

// using replacer in json.stringify
function replacer() {
  const seen = new WeakSet();

  return function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}
