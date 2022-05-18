const str = readline();
let i = 0;
let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
while (i < str.length) {
  if (
    (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) ||
    (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)
  ) {
    res1++;
  } else if (str[i] == " ") {
    res2++;
  } else if (str[i] >= 0 && str[i] <= 9) {
    res3++;
  } else {
    res4++;
  }
  i++;
}
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
