// Implement a shuffle
// Example: arr = [1,2,3,4]
// Returns an inlined shuffled array

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let newIdx = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    [arr[i], arr[newIdx]] = [arr[newIdx], arr[i]];
  }

  return arr;
}
