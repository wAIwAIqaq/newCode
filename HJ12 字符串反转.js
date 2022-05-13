const str = readline();
let res = "";
let i = str.length - 1;
while (res.length < str.length) {
  res += str[i];
  i--;
}
console.log(res);
