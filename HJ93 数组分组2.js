readline();
const arr = readline().split(" ").map(Number);
const threeArr = [];
const fiveArr = [];
const tempArr = [];
arr.forEach((item) => {
  if (item % 3 == 0) {
    threeArr.push(item);
  } else if (item % 5 == 0) {
    fiveArr.push(item);
  } else {
    tempArr.push(item);
  }
});
let flag = false;
isEqual(tempArr);
function isEqual(rest, threeArr = [], fiveArr = []) {
  if (rest.length != 0) {
    const cur = rest[0];
    const nextRest = rest.slice(1, rest.length);
    threeArr.push(cur);
    isEqual(nextRest, [...threeArr], [...fiveArr]);
    threeArr.pop();
    fiveArr.push(cur);
    isEqual(nextRest, [...threeArr], [...fiveArr]);
  } else {
    let threeVal = 0,
      fiveVal = 0;
    threeArr.forEach((item) => (threeVal += item));
    fiveArr.forEach((item) => (fiveVal += item));
    if (threeVal == fiveVal) {
      flag = true;
    }
  }
}
console.log(flag);
