/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  // write code here
  // 双指针 链表长度为 n 环长度为 m
  // 当慢指针进入环的时候 快指针已经跑了 2n 此时 快指针 在环中的新一轮位置为 (2n - n) % m 记为j
  // 开始追击问题
  // 快慢指针相遇 其实就相当于 慢指针再跑 m -j
  // 此时，设置一个指针cur指向头部，此时慢指针再跑 【快指针在慢指针进入节点前的距离】会跟cur指针相遇
  // 也就是cur跑了【快指针在慢指针进入节点前的距离】就指向环入口
  if (!pHead.next || !pHead.next.next) {
    return;
  }
  let slow = pHead.next;
  let fast = pHead.next.next;
  while (slow !== fast) {
    if (!slow.next || !fast.next.next) return;
    slow = slow.next;
    fast = fast.next.next;
  }
  let cur = pHead;
  while (cur !== slow) {
    cur = cur.next;
    slow = slow.next;
  }
  return cur;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
