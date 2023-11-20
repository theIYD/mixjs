// Implement a stack using an array
let stack = [];

// Push method: Add onto the end of the stack
stack.push("Idrees");
stack.push("John");

// Pop method: Remove from the end of the stack
stack.pop();

// Unshift method: Add from the beginning
stack.unshift("Dad");
stack.unshift("Mom");

// Shift method: Remove from the beginning
stack.shift();
stack.shift();

// Drawnback for shift and unshift: Reindexing of elements take place which is bad Big O. Hence we use a Linked list for large amount of data
