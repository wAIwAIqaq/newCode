/**
 * max length of the subarray sum = k
 * @param arr int整型一维数组 the array
 * @param k int整型 target
 * @return int整型
 */
function maxlenEqualK(arr, k) {
  // write code here
  let itemSum = 0;
  let res = 0;
  const sumArr = arr.map((item) => {
    return (itemSum += item);
  });
  // 转化为 求t两数之差 = k
  const map = new Map();
  console.log(sumArr);
  sumArr.forEach((item, index) => {
    map.set(item, index);
  });
  sumArr.forEach((item, index) => {
    if (item === k) {
      res = Math.max(index + 1, res);
    } else {
      const target1 = k - item;
      const target2 = item - k;
      const targetIndex1 = map.get(target1);
      const targetIndex2 = map.get(target2);
      // 求绝对值
      if (targetIndex1) {
        const sublen =
          index > targetIndex1
            ? parseInt(index) - parseInt(targetIndex1)
            : parseInt(targetIndex1) - parseInt(index);
        res = Math.max(sublen, res);
      }
      if (targetIndex2) {
        const sublen =
          index > targetIndex2
            ? parseInt(index) - parseInt(targetIndex2)
            : parseInt(targetIndex2) - parseInt(index);
        res = Math.max(sublen, res);
      }
    }
  });
  return res;
}
module.exports = {
  maxlenEqualK: maxlenEqualK,
};
