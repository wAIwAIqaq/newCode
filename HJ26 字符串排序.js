// 真是草了
const input = "yfNU!#(%Wd(w$".split("");
// 非字母占位符map
const spArr = [];
const arr = input.map((item, index) => {
  if ((item >= "a" && item <= "z") || (item >= "A" && item <= "Z")) {
    return item;
  } else {
    spArr.push([item, index]);
  }
});
let subArr = arr.sort((a, b) => {
  if (a.toUpperCase() < b.toUpperCase()) {
    return -1;
  } else if (a.toUpperCase() === b.toUpperCase()) {
    return 0;
  } else {
    return 1;
  }
});
spArr.forEach((item) => {
  headArr = subArr.slice(0, item[1]);
  tailArr = subArr.slice(item[1], subArr.length);
  subArr = [...headArr, item[0], ...tailArr];
});
console.log(subArr.join(""));
