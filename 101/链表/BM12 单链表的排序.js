/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  // write code here
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  let list = new ListNode();
  let res = list;
  arr.forEach((item) => {
    list.next = new ListNode(item);
    list = list.next;
  });
  return res.next;
}
module.exports = {
  sortInList: sortInList,
};
