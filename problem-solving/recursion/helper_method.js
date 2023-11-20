function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    //modify outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
