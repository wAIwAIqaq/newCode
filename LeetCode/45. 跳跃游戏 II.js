/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.lenght == 1) {
    return 0;
  }
  const maxIndex = nums.length - 1;
  let res = Infinity;
  jumpTo();
  function jumpTo(curIndex = 0, times = 0) {
    if (nums[curIndex] == 0) {
      return;
    }
    let i = nums[curIndex];
    while (i > 0) {
      if (curIndex + i >= maxIndex) {
        res = Math.min(res, times + 1);
        break;
      }
      jumpTo(curIndex + i, times + 1);
      i--;
    }
  }
  return res;
};

console.log(jump([2, 3, 1, 1, 4]));
