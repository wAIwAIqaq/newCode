/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  // write code here
  let cur = head;
  for (let i = 0; i < k; i++) {
    if (!cur) {
      return head;
    } else {
      cur = cur.next;
    }
  }
  const res = reverse(head, cur);
  head.next = reverseKGroup(cur, k);
  return res;
}
function reverse(head, tail) {
  let pre = null;
  let next = head;
  let cur = head;
  while (cur !== tail) {
    next = cur.next;
    cur.next = pre;

    pre = cur;
    cur = next;
  }
  return pre;
}
module.exports = {
  reverseKGroup: reverseKGroup,
};
