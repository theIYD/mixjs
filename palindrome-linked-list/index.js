/* Given the head of a singly linked list, write a method to check if the linked list is a palindrome or not */
// T = O(N) | S = O(1)
var palindromeLL = (head) => {
  let slow = head;
  let fast = head;

  // Find middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow); // reverse second half
  // Store the head of reverse part to revert back later
  let copyHeadSecondHalf = headSecondHalf;

  // compare the first part and reverse part
  while (head && headSecondHalf) {
    if (head.val !== headSecondHalf.val) break; // not a palindrome
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverse(copyHeadSecondHalf);
  if (!head || !headSecondHalf) return true; // is a palindrome
  return false;
};

// Reverse a linkedlist
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
