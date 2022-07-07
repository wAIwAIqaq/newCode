/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  return C(m + n - 2, m - 1);
};
function C(a, b) {
  let i = b;
  let tempA = 1;
  while (i > 0) {
    tempA *= a;
    a--;
    i--;
  }
  i = 1;
  let tempB = 1;
  while (i <= b) {
    tempB *= i;
    i++;
  }
  return tempA / tempB;
}
console.log(uniquePaths(3, 7));
