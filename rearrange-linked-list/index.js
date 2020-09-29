/* Given the head of a singly linked list, write a method to modify the linked list such that the nodes from the second half
of the linked list are inserted alternately to the nodes from the first half in reverse order. */
// T = O(N) | S = O(1)
var rearrangeLL = (head) => {
  let slow = head;
  let fast = head;

  // Find middle of linkedlist
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalfReverse = reverse(slow);
  let firstHalf = head;

  while (firstHalf && secondHalfReverse) {
    let temp = firstHalf.next;
    firstHalf.next = secondHalfReverse;
    firstHalf = temp;

    temp = secondHalfReverse.next;
    secondHalfReverse.next = firstHalf;
    secondHalfReverse = temp;
  }

  if (firstHalf !== null) firstHalf.next = null;
};

var reverse = (head) => {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
