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
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here
  if (pHead == null || k <= 0) {
    return null;
  }
  let left = pHead;
  let right = pHead;
  let i = 0;
  while (right) {
    right = right.next;
    if (i >= k) {
      left = left.next;
    }
    i++;
  }
  if (i < k) {
    return null;
  }
  return left;
}
module.exports = {
  FindKthToTail: FindKthToTail,
};
