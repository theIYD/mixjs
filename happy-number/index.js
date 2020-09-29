/* Write an algorithm to determine if a number n is 'happy'. Any number will be called a 
happy number if, after repeatedly replacing it with a number equal to the sum of the sqaure
of all of its digits, leads us to number 1. All other (not-happy) numbers will never reach 1
Instead, they will be stuck in a cycle of numbers which does not include 1 */
// T = O(logN) || S = O(1)
var happyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (true) {
    slow = squareNumber(slow); // move one step
    fast = squareNumber(squareNumber(fast)); // move two steps

    if (slow === fast) break;
  }

  return slow === 1; // see if the cycle is stuck on the number 1
};

// Find the sum of squared digits of a number
var squareNumber = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
};
