// Given a stack, reverse it
function reverseStack(stack) {
  if (stack.length === 0) return;

  // Hypothesis
  let val = stack.pop();
  reverseStack(stack);

  // Induction
  stack.unshift(val);
  return;
}
