// T = O(n) | S = O(1)
var removeNthNodeFromEnd = (head, n) => {
  let counter = 1;
  let first = head;
  let second = head;

  // Forward second by n nodes
  while (counter <= n) {
    second = second.next;
    counter += 1;
  }

  // Second points to NULL
  if (!second) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  // Traverse first and second till end
  while (!second.next) {
    first = first.next;
    second = second.next;
  }

  // first is pointing to the node right before the node we want to remove
  first.next = first.next.next;
};
