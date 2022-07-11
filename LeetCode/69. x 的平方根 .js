/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let [left, right] = [0, x];
  while (right - left > 1) {
    const mid = Math.ceil((right + left) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }
  }
  console.log(left);
  return left;
};
mySqrt(8);
