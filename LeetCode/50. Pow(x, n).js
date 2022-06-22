/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const res = powHandler(x, n);
  return Number(res).toFixed(5);
  function powHandler(x, n) {
    if (n == 0) {
      const res = 1;
      return res;
    } else if ((n & 1) === 0) {
      return myPow(x * x, n / 2);
    } else {
      return (n > 0 ? x : 1 / x) * myPow(x * x, n / 2);
    }
  }
};
console.log(myPow(2.12345, -2));
