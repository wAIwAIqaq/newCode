const typeCount = "3";
const weightArr = "10 191 103".split(" ");
const numArr = "6 6 5".split(" ");
const subSet = new Set();
const arr = ["0"];
weightArr.forEach((item, index) => {
  let i = 0;
  while (i < numArr[index]) {
    arr.push(item);
    i++;
  }
});
// 递归 i-已选了多少个 arr-剩下的数组 w-前面的重量
console.log(arr);
function count(c, arr, w = 0) {
  for (let i = 0; i < arr.length; i++) {
    restArr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
    console.log(restArr);
    subSet.add(w + parseInt(arr[i]));
    count(i + 1, restArr, w + parseInt(arr[i]));
  }
}
count(0, arr, 0);
console.log([...subSet].length);
