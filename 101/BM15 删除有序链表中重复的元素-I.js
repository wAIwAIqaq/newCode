/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here
  let val = null;
  let cur = head;
  while (cur) {
    if (cur && cur.next && cur.val == cur.next.val) {
      if (cur.next) {
        cur.next = cur.next.next;
      } else {
        cur.next = null;
      }
    } else {
      val = cur.val;
      cur = cur.next;
    }
  }
  return head;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
