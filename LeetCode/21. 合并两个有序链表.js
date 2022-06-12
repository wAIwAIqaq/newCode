/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (pHead1, pHead2) {
  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;
  if (pHead1.val > pHead2.val) {
    pHead2.next = mergeTwoLists(pHead1, pHead2.next);
    return pHead2;
  } else {
    pHead1.next = mergeTwoLists(pHead1.next, pHead2);
    return pHead1;
  }
};
