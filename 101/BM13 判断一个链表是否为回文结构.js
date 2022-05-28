/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  // write code here
  const sub = [];
  const rSub = [];
  while (head) {
    sub.push(head.val);
    rSub.unshift(head.val);
    head = head.next;
  }
  if (sub.join() === rSub.join()) return true;
  return false;
}
module.exports = {
  isPail: isPail,
};
