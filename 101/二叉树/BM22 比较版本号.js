/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  // write code here
  let res = 0;
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  while (arr1.length !== 0 || arr2.length !== 0) {
    if (arr1[0] && arr2[0] && Number(arr1[0]) > Number(arr2[0])) {
      res = 1;
      break;
    } else if (arr1[0] && arr2[0] && Number(arr1[0]) < Number(arr2[0])) {
      res = -1;
      break;
    } else if (arr1[0] && Number(arr1[0]) != 0 && !arr2[0]) {
      res = 1;
      break;
    } else if (arr2[0] && Number(arr2[0]) != 0 && !arr1[0]) {
      res = -1;
      break;
    } else {
      arr1.shift();
      arr2.shift();
    }
  }
  return res;
}
module.exports = {
  compare: compare,
};
