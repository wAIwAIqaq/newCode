/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  // write code here
  let subNode = { next: head };
  head = subNode;
  let left = subNode;
  let right = subNode;
  let i = 0;
  for (; i < m - 1; i++) {
    head = head.next;
  }
  left = head;
  for (; i < n; i++) {
    head = head.next;
  }
  right = head.next;
  head.next = null;
  const [start, end] = reverse(left.next);
  left.next = start;
  end.next = right;
  return subNode.next;
}
function reverse(head) {
  let pre = null;
  let next = null;
  let cur = head;
  while (cur) {
    next = cur.next;
    cur.next = pre;

    pre = cur;
    cur = next;
  }
  return [pre, head];
}
module.exports = {
  reverseBetween: reverseBetween,
};
