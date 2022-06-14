var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(null);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 1; i < n + 1; i++) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};
