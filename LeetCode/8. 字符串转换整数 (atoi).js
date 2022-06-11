var myAtoi = function (s) {
  let i = 0;
  const arr = [];
  s = s.trim();
  if (s[0] == "-") {
    arr.push("-");
    i = 1;
  } else if (s[0] == "+") {
    arr.push("+");
    i = 1;
  }
  while (i < s.length) {
    if (parseInt(s[i]) == s[i]) {
      arr.push(s[i]);
    } else {
      break;
    }
    i++;
  }
  str = arr.join("");
  if (str == "-" || str == "" || str == "+") {
    return 0;
  }
  if (parseInt(str) < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  } else if (parseInt(str) > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return parseInt(str);
};
