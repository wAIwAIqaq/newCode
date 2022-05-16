// 最长回文字符串
const str = readline();
let headStr = "";
let tailStr = "";
let count = 0;
for (let i = 1; i < str.length - 1; i++) {
  let itemCount = 0;
  if (str[i] === str[i + 1]) {
    headStr = str.slice(0, i + 1);
    tailStr = str.slice(i + 1, str.length);
    let j = 0;
    while (j < i + 1 && j < tailStr.length) {
      if (headStr[i - j] === tailStr[j]) {
        itemCount++;
      } else {
        break;
      }
      j++;
    }
    count = Math.max(count, itemCount * 2);
    itemCount = 0;
  }
  if (str[i - 1] === str[i + 1]) {
    headStr = str.slice(0, i);
    tailStr = str.slice(i + 1, str.length);
    let j = 0;
    while (j < i + 1 && j < tailStr.length) {
      if (headStr[i - j - 1] === tailStr[j]) {
        itemCount++;
      } else {
        break;
      }
      j++;
    }
    count = Math.max(count, itemCount * 2 + 1);
    itemCount = 0;
  }
}
console.log(count);
