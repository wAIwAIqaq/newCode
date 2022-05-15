// 需要加密
const encreptStr = readline();
// 需要解密
const creapt = readline();
const encreptArr = encreptStr.split("");
const creaptArr = creapt.split("");
const res1 = encrept(encreptArr).join("");
const res2 = crept(creaptArr).join("");
console.log(res1);
console.log(res2);
function encrept(arr) {
  return arr.map((item) => {
    if (item >= "a" && item < "z") {
      return String.fromCharCode(item.charCodeAt() - 0 + 1).toUpperCase();
    } else if (item === "z") {
      return "A";
    } else if (item >= "A" && item < "Z") {
      return String.fromCharCode(item.charCodeAt() - 0 + 1).toLowerCase();
    } else if (item === "Z") {
      return "a";
    } else if (item >= 0 && item < 9) {
      return item - 0 + 1;
    } else if (item == 9) {
      return "0";
    } else {
      return item;
    }
  });
}
function crept(arr) {
  return arr.map((item) => {
    if (item > "a" && item <= "z") {
      return String.fromCharCode(item.charCodeAt() - 0 - 1).toUpperCase();
    } else if (item === "a") {
      return "Z";
    } else if (item > "A" && item <= "Z") {
      return String.fromCharCode(item.charCodeAt() - 0 - 1).toLowerCase();
    } else if (item === "A") {
      return "z";
    } else if (item > 0 && item <= 9) {
      return item - 1;
    } else if (item == 0) {
      return 9;
    } else {
      return item;
    }
  });
}
