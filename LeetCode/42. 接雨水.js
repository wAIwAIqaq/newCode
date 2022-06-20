/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  let i = 1;
  while (i < height.length - 1) {
    const left = height.slice(0, i + 1);
    const cur = height[i];
    const right = height.slice(i, height.length);
    const higher1 = Math.max(...left);
    const higher2 = Math.max(...right);
    const val = Math.min(higher1, higher2) - height[i];
    if (val > 0) {
      res += val;
    }
    i++;
  }
  return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
