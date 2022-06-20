const input = "-1,1,2,3,4,-10";
const arr = input.split(",").map(Number);
let res = -Infinity;
getVal(arr);
function getVal(restArr, path = []) {
  if (path.length == arr.length) {
    res = Math.max(res, path[path.length - 1]);
  } else {
    // 不选
    const cur = restArr[0];
    const curVal =
      typeof path[path.length - 3] == "undefined" ? 0 : path[path.length - 3];
    path.push(curVal);
    getVal(restArr.slice(1, restArr.length), [...path]);
    // 选
    path.pop();
    const nextPathLastVal =
      (typeof path[path.length - 1] == "undefined"
        ? 0
        : path[path.length - 1]) + restArr[0];
    getVal(restArr.slice(1, restArr.length), [...path, nextPathLastVal]);
  }
}
console.log(res);
