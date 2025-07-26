function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers() {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  const l1 = [2, 4, 3],
    l2 = [5, 6, 4];

  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}
