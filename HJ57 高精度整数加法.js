const arr1 = "2078".split("").map((item) => Number(item));
const arr2 = "81".split("").map((item) => Number(item));
let longArr = [];
let shortArr = [];
if (arr1.length > arr2.length) {
  longArr = arr1;
  shortArr = arr2;
} else {
  longArr = arr2;
  shortArr = arr1;
}
let i = 0;
let flag = 0;
let res = "";
while (i < longArr.length) {
  if (shortArr[shortArr.length - 1 - i]) {
    if (
      shortArr[shortArr.length - 1 - i] +
        longArr[longArr.length - 1 - i] +
        flag >=
      10
    ) {
      res =
        String(
          shortArr[shortArr.length - 1 - i] +
            longArr[longArr.length - 1 - i] +
            flag
        ).split("")[1] + res;
      flag = 1;
    } else {
      res =
        String(
          shortArr[shortArr.length - 1 - i] +
            longArr[longArr.length - 1 - i] +
            flag
        ).split("")[0] + res;
      flag = 0;
    }
  } else {
    if (longArr[longArr.length - 1 - i] + flag >= 10) {
      res = String(longArr[longArr.length - 1 - i] + flag).split("")[1] + res;
      flag = 1;
    } else {
      res = longArr[longArr.length - 1 - i] + flag + res;
      flag = 0;
    }
  }
  i++;
}
if (flag) {
  res = "1" + res;
}
console.log(res);
