class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function mergeTwoLists(list1, list2) {
  let result = new ListNode();
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.val <= list2.val) {
    result = list1;
    result.next = mergeTwoLists(list1.next, list2);
  } else {
    result = list2;
    result.next = mergeTwoLists(list1, list2.next);
  }
  return result;
}
