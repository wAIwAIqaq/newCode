/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  digits[i] += 1;
  while (digits[i] > 9) {
    digits[i] = 0;
    if (digits[i - 1] !== undefined) {
      digits[i - 1] += 1;
      i--;
    } else {
      digits.unshift(0);
      break;
    }
  }
  return digits;
};
plusOne([9]);
