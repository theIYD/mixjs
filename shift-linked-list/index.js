var shiftLinkedList = function (head, k) {
  if (!head) return null;
  let listTail = head,
    listLength = 1;

  while (listTail.next) {
    listTail = listTail.next;
    listLength += 1;
  }

  let offset = Math.abs(k) % listLength;
  if (offset === 0) return head;

  let newTailPosition = k > 0 ? listLength - offset : offset;
  let newTail = head;

  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
};
