// Check if function is called with new keyword
function X() {
  if (this instanceof X && !this._constructed) {
    this._constructed = true;
    // it's called with new
  } else {
    // not called with new
  }
}

// ES6 way
function Y() {
  if (new.target) {
    // called with new
  } else {
    // not called with new
  }
}
