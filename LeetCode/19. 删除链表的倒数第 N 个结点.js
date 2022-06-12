/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 双指针
  if (head == null || head.next == null) {
    return null;
  }
  let left = head;
  let right = head;
  let i = 0;
  while (right) {
    right = right.next;
    if (i > n) {
      left = left.next;
    }
    i++;
  }
  if (i == n) {
    return head.next;
  }
  left.next = left.next.next;
  return head;
};
