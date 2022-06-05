const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const arr = line.split(" ");
  if (arr.includes("joker") || arr.includes("JOKER")) {
    console.log("ERROR");
    return;
  }
  let i = 0;
  const res = [];
  toCacul([arr[1], arr[2], arr[3]], toNum(arr[0]), arr[0]);
  toCacul([arr[0], arr[2], arr[3]], toNum(arr[1]), arr[1]);
  toCacul([arr[0], arr[1], arr[3]], toNum(arr[2]), arr[2]);
  toCacul([arr[0], arr[1], arr[2]], toNum(arr[3]), arr[3]);
  if (res.length == 0) {
    console.log("NONE");
  } else {
    console.log(res[0]);
  }
  function toCacul(arr, val = 0, str = "") {
    if (val == 24 && arr.length == 0) {
      res.push(str);
      return;
    } else if (arr.length == 0) {
      return;
    }
    toAdd(arr, val, str);
    toSub(arr, val, str);
    toMul(arr, val, str);
    toDiv(arr, val, str);
  }
  function toNum(arr) {
    let cur;
    if (arr[0] == "A") {
      cur = 1;
    } else if (arr[0] == "J") {
      cur = 11;
    } else if (arr[0] == "Q") {
      cur = 12;
    } else if (arr[0] == "K") {
      cur = 13;
    } else {
      cur = parseInt(arr[0]);
    }
    return cur;
  }
  function toAdd(arr, val, str = "") {
    let cur = toNum(arr);
    val += cur;
    str += `+${str[0]}`;
    const subArr = arr.slice();
    toCacul(subArr.splice(i, 1), val, str);
  }

  function toSub(arr, val, str = "") {
    let cur = toNum(arr);
    val -= cur;
    str += `-${str[0]}`;
    const subArr = arr.slice();
    toCacul(subArr.splice(i, 1), val, str);
  }
  function toMul(arr, val, str = "") {
    let cur = toNum(arr);
    val *= cur;
    str += `*${str[0]}`;
    const subArr = arr.slice();
    toCacul(subArr.splice(i, 1), val, str);
  }
  function toDiv(arr, val, str = "") {
    let cur = toNum(arr);
    val /= cur;
    str += `/${str[0]}`;
    const subArr = arr.slice();
    toCacul(subArr.splice(i, 1), val, str);
  }
});
