let str = readline();
let arr = str.split("");
let i = 0;
const map = new Map();
while (i < str.length) {
  if (map.get(str[i])) {
    map.set(str[i], map.get(str[i]) + 1);
  } else {
    map.set(str[i], 1);
  }
  i++;
}
let min = str.length;
let replaceArr = [];
[...map].forEach((item) => {
  if (item[1] < min) {
    min = item[1];
    replaceArr = [item[0]];
  } else if (item[1] === min) {
    replaceArr.push(item[0]);
  }
});
const res = arr
  .map((item) => {
    if (replaceArr.includes(item)) {
      return "";
    } else {
      return item;
    }
  })
  .join("");
console.log(res);
