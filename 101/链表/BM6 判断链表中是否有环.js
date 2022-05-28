/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here
  if (!head) return false;
  let single = head;
  let double = head;
  while (double != null && double.next != null) {
    single = single.next;
    double = double.next.next;
    if (double === single) return true;
  }
  return false;
}
module.exports = {
  hasCycle: hasCycle,
};
