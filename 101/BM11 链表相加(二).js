/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  // write code here
  let rHead1 = reverseNodelist(head1);
  let rHead2 = reverseNodelist(head2);
  let rRes = new ListNode();
  let head = new ListNode();
  rRes = head;
  let flag = 0;
  while (rHead1 != null || rHead2 != null || flag != 0) {
    let val1 = rHead1 ? rHead1.val : 0;
    let val2 = rHead2 ? rHead2.val : 0;
    let val = (val1 + val2 + flag) % 10;
    if (val1 + val2 + flag >= 10) {
      flag = 1;
    } else {
      flag = 0;
    }
    head.next = new ListNode(val);
    head = head.next;
    if (rHead1) {
      rHead1 = rHead1.next;
    }
    if (rHead2) {
      rHead2 = rHead2.next;
    }
  }
  return reverseNodelist(rRes.next);
}
function reverseNodelist(head) {
  if (head === null || head.next === null) return head;
  let p1 = null;
  let p2 = null;
  while (head) {
    p1 = head.next;
    head.next = p2;
    p2 = head;
    head = p1;
  }
  return p2;
}
module.exports = {
  addInList: addInList,
};
