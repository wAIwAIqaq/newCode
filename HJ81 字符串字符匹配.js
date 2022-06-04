const str1 = readline();
const str2 = readline();
let flag = true;
let i = 0;
while (i < str1.length) {
  if (str2.indexOf(str1[i]) === -1) {
    flag = false;
    break;
  }
  i++;
}
console.log(flag);
