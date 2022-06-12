/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend == 0) {
    return 0;
  }
  if (divisor == 1 || divisor == -1) {
    if (dividend > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (dividend == -Math.pow(2, 31) && divisor == -1)
      return Math.pow(2, 31) - 1;
    if (divisor == -1) return -dividend;
    return dividend;
  }
  let flag = false;
  if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
    flag = true;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let i = 0;
  while (dividend >= 0) {
    dividend = dividend - divisor;
    i++;
  }
  if (flag) {
    return i - 1;
  } else {
    return -i + 1;
  }
};
