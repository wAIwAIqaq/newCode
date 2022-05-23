const arr = readline().split("");
const subArr = [];
const map = new Map();
arr.forEach((item) => {
  if (map.has(item)) {
    if (map.get(item) !== "") {
      map.set(item, 1);
    }
  } else {
    map.set(item, 0);
  }
});
let flag = true;
[...map].forEach((item) => {
  if (item[1] === 0) {
    if (flag) {
      console.log(item[0]);
      flag = false;
    }
  }
});
if (flag) {
  console.log(-1);
}
