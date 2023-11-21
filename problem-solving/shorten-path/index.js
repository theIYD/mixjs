var shortenPath = (path) => {
  const startsWithSlash = path[0] === "/";
  // Split and filter
  let tokens = path.split("/").filter(isImportantToken);
  let stack = [];

  // If path starts with slash, push root to stack
  if (startsWithSlash) stack.push("");
  for (let token of tokens) {
    // If token is double dots
    if (token === "..") {
      // If stack is empty or last element in stack is double dots, push token to stack
      if (stack.length === 0 || stack[stack.length - 1] === "..")
        stack.push(token);
      // If last element in stack is a directory, pop the stack
      if (stack[stack.length - 1] !== "") stack.pop();
      // If last element in stack is root i.e "" string, do nothing

      // Push directory to stack
    } else stack.push(token);
  }

  // Handle only root
  if (stack.length === 1 && stack[0] === "") return "/";
  return stack.join("/");
};

var isImportantToken = (token) => {
  return token.length > 0 && token !== ".";
};
