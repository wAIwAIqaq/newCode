/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      arr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  arr.sort((a, b) => a - b);
  let subNode = new ListNode(-1);
  let cur = subNode;
  arr.forEach((item) => {
    cur.next = new ListNode(item);
    cur = cur.next;
  });
  return subNode.next;
}
