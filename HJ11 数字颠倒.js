const str = readline();
let res = "";
let i = str.length - 1;
while (i >= 0) {
  res += str[i];
  i--;
}
console.log(res);
