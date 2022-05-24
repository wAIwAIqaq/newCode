/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  // write code here
  if (pHead === null || pHead.next === null) {
    return pHead;
  } else {
    let p1 = null;
    let p2 = null;
    while (pHead !== null) {
      p1 = pHead.next;
      pHead.next = p2;
      p2 = pHead;
      pHead = p1;
    }
    return p2;
  }
}
module.exports = {
  ReverseList: ReverseList,
};
