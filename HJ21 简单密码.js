const str = readline();
let res = "";
let i = 0;
while (i < str.length) {
  if (str[i] === "Z") {
    res += "a";
  } else if (str[i] >= "A" && str[i] < "Z") {
    res += String.fromCharCode(str[i].charCodeAt() + 1).toLowerCase();
  } else {
    if ("abc".includes(str[i])) {
      res += "2";
    } else if ("def".includes(str[i])) {
      res += "3";
    } else if ("ghi".includes(str[i])) {
      res += "4";
    } else if ("jkl".includes(str[i])) {
      res += "5";
    } else if ("mno".includes(str[i])) {
      res += "6";
    } else if ("pqrs".includes(str[i])) {
      res += "7";
    } else if ("tuv".includes(str[i])) {
      res += "8";
    } else if ("wxyz".includes(str[i])) {
      res += "9";
    } else {
      res += str[i];
    }
  }
  i++;
}
console.log(res);
