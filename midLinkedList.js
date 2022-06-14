var middleNode = function (head) {
  let slow = head,
    fast = head;

  while (fast.next) {
    if (fast.next && !fast.next.next) {
      return slow.next;
    }

    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
