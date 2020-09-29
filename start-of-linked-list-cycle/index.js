/* Given the head of a single linked list that contains a cycle, write a function to find the starting node of the cycle */
// T = O(N) | S = O(1)
var startOfLLCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // found the cycle
      let start = head;

      while (start !== slow) {
        start = start.next;
        slow = slow.next;
      }

      return start;
    }
  }
};
