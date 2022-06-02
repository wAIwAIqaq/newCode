function minNumberInRotateArray(rotateArray) {
  // write code here
  let count = Infinity;
  let i = 1;
  while (i < rotateArray.length) {
    if (rotateArray[i - 1] < rotateArray[i]) {
      count = Math.min(count, rotateArray[i - 1]);
    }
    i++;
  }
  count = Math.min(count, rotateArray[rotateArray.length - 1]);
  return count;
}
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray,
};
