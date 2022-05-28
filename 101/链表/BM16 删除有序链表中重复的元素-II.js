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
  const subNode = new ListNode();
  subNode.next = head;
  let cur = subNode;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      while (cur.next && cur.next.val == val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return subNode.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
