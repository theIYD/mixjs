// Given a stack, delete the middle element
// Middle element (k) = size / 2 + 1

let arr = [2, 5, 1, 0, 3, 6, 8];
let k = Math.floor(arr.length / 2) + 1;

function deleteMiddleElement(stack, k) {
  if (k === 1) {
    stack.pop();
    return;
  }

  let val = stack.pop();
  deleteMiddleElement(stack, k - 1);
  stack.push(val);
  return;
}
