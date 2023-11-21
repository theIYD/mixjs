// T = O(N) | S = O(N)
var balancedBrackets = (string) => {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";

  const matchingBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];
  for (let char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === matchingBracket[char]) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length === 0;
};
