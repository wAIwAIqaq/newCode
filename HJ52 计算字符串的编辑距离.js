const arr1 = readline().split("");
const arr2 = readline().split("");
if (arr1.length > arr2.length) {
  longArr = arr1;
  shortArr = arr2;
} else {
  longArr = arr2;
  shortArr = arr1;
}
const emptyArr = new Array(longArr.length).fill("");
let restArr = longArr;
shortArr.forEach((item, i) => {
  const index = restArr.findIndex((item1, i) => {
    return item1 === item;
  });
  if (index !== -1) {
    restArr = restArr.slice(index + 1, restArr.length);
    emptyArr[index] = item;
  }
});
let count = 0;
emptyArr.forEach((item) => {
  if (item === "") count++;
});
console.log(count);
