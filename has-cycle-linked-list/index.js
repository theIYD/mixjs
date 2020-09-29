/* Given the head of a singly linked list, write a function to determine if the linkedlist has a cycle in it or not */
// T = O(N) | S = O(1)
var hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // found the cycle
  }

  return false;
};

/* Given the head of a linkedlist with a cycle, find the length of the cycle */
// T = O(N) | S = O(1)
var lengthOfCycle = (head) => {
  let slow = head;
  let fast = head;
  let length = 0;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let lengthPtr = slow;
      while (lengthPtr !== slow) {
        length++;
        lengthPtr = lengthPtr.next;
      }

      break;
    }
  }

  return length;
};
