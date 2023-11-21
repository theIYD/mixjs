// Simple hashing function.
// Drawbacks:
// 1. Not constant time
// 2. Works on strings only
var simpleHash = (key, arrayLen) => {
  var total = 0;
  for (var char of key) {
    var value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
};

// Use a prime number to hash
var primeHash = (key, arrayLen) => {
  var total = 0;
  var WIERD_PRIME = 31;
  for (var i = 0; i < Math.min(key.length, 100); i++) {
    var char = key[i];
    var value = char.charCodeAt(0) - 96;
    total = (total * WIERD_PRIME + value) % arrayLen;
  }

  return total;
};

module.exports = { simpleHash };
