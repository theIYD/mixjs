// T = O(N+M) | S = O(1)
var mergeLinkedLists = (headOne, headTwo) => {
  let p1 = headOne,
    p1Prev = null,
    p2 = headTwo;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev) p1Prev.next = p2;
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }

  if (!p1) p1Prev.next = p2;

  return headOne.val < headTwo.val ? headOne : headTwo;
};

// T = O(N+M) | S = O(N+M)
var recursiveMerge = (p1, p2, p1Prev) => {
  if (!p1) {
    p1Prev.next = p2;
    return;
  }
  if (!p2) return;

  if (p1.val < p2.val) {
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (p1Prev) {
      p1Prev.next = p2;
    }
    let newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
};
