/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
function mergeKLists(lists) {
  // write code here
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
module.exports = {
  mergeKLists: mergeKLists,
};
