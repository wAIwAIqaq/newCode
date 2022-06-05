// 个位自守数   1 5 6
const num = parseInt(readline());
let i = 0;
let count = 0;
while (i <= num) {
  let str = i.toString();
  if (
    str[str.length - 1] == 0 ||
    str[str.length - 1] == 1 ||
    str[str.length - 1] == 5 ||
    str[str.length - 1] == 6
  ) {
    const subStr = (i * i).toString();
    if (subStr.indexOf(str) == subStr.length - str.length) {
      count++;
    }
  }
  i++;
}
console.log(count);
