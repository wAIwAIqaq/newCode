var isValid = function (s) {
  let i = 0;
  const leftArr = [];
  const leftToRight = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  while (i < s.length) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      leftArr.push(s[i]);
    } else {
      if (s[i] !== leftToRight.get(leftArr[leftArr.length - 1])) {
        return false;
      } else {
        leftArr.pop();
      }
    }
    i++;
  }
  if (leftArr.length === 0) {
    return true;
  }
  return false;
};
