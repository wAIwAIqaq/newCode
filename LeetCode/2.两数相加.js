/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res = [];
    let nextNum = 0;
    const sl = l1.length < l2.length ? l1.length : l2.length;
    for (let i = 0; i < sl; i++) {
        if (l1[i] + l2[i] > 9) {
            res.push(l1[i] + l2[i] - 10 + nextNum);
            nextNum = 1;
        }
        else {
            res.push(l1[i] + l2[i] + nextNum);
            nextNum = 0;
        }
    }
    if (l1.length > l2.length) {
        for (let i = 0; i < l1.length - sl; i++) {
            res.push(l1[l1.length - i - 1] + nextNum);
            nextNum = 0;
        }
    }
    else {
        for (let i = 0; i < l2.length - sl; i++) {
            res.push(l2[l2.length - i - 1] + nextNum);
            nextNum = 0;
        }
    }
    return res.reverse().reduce((pre, cur) => {
        return new ListNode(cur, pre)
    }, undefined);
};
console.log(addTwoNumbers([0], [5, 6, 4]));
