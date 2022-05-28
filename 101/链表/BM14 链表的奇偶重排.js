/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function oddEvenList(head) {
  // write code here
  let oddList = new ListNode();
  let res = oddList;
  let evenList = new ListNode();
  let evenRes = evenList;
  let flag = true;
  while (head) {
    if (flag) {
      let val = new ListNode(head.val);
      oddList.next = val;
      oddList = oddList.next;
      flag = !flag;
    } else {
      let val = new ListNode(head.val);
      evenList.next = val;
      evenList = evenList.next;
      flag = !flag;
    }
    head = head.next;
  }
  oddList.next = evenRes.next;
  return res.next;
}
module.exports = {
  oddEvenList: oddEvenList,
};
