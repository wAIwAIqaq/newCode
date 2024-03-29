/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};
