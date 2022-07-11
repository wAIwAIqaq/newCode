/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let i = 0,
    prev = 1,
    prevprev = 0,
    res = 0;
  while (i <= n) {
    prevprev = prev;
    prev = res;
    res = prev + prevprev;
    i++;
  }
  return res;
};
climbStairs(3);
