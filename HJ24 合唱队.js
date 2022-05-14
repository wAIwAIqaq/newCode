let arr = [];
const total = readline();
const str = readline();

arr = str.split(" ").map((item) => parseInt(item));
// 求最长递增子序列
function getMaxUpLen(arr) {
  const subArr = [];
  for (let i = 0; i < arr.length; i++) {
    let ml = 0;
    for (let j = 0; j < subArr.length; j++) {
      if (arr[i] > arr[j]) {
        ml = Math.max(subArr[j], ml);
      }
    }
    subArr.push(ml + 1);
  }
  return subArr;
}

const upArr = getMaxUpLen(arr);
const downArr = getMaxUpLen(arr.reverse()).reverse();
console.log(upArr, downArr);
let maxLen = 0;
for (let i = 0; i < arr.length; i++) {
  maxLen = Math.max(upArr[i] + downArr[i], maxLen);
}

console.log(arr.length - maxLen + 1);
