const arr = readline().split(" ");
const len = arr[0];
const head = arr[1];
const subArr = [arr[1]];
const d = arr[arr.length - 1];
const insertArr = arr.slice(2, arr.length - 1);
let i = 0;
while (i < insertArr.length) {
  const val = insertArr[i];
  const index = subArr.findIndex((item) => {
    return item === insertArr[i + 1];
  });
  subArr.splice(index + 1, 0, val);
  i += 2;
}
console.log(
  subArr
    .filter((item) => {
      return item !== d;
    })
    .join(" ")
);
