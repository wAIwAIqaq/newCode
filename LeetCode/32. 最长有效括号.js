/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let i = 0;
  const arr = s.split("");
  let max = "";
  while (i < arr.length) {
    if (arr[i] === "(") {
      const temp = getStr(arr.slice(i, arr.length));
      if (temp.length > max.length) {
        max = temp.join("");
      }
    }
    i++;
  }
  console.log(max.length);
  return max.length;
  function getStr(arr) {
    const stack = ["("];
    let val = -1;
    let i = 1;
    const temp = [];
    while (i < arr.length) {
      if (arr[i] == ")") {
        if (stack.pop() == "(") {
          val++;
        } else {
          break;
        }
      } else {
        stack.push("(");
        val--;
      }
      i++;
      if (val == 0) {
        temp.push(i);
      }
    }
    const result = temp.length ? arr.slice(0, temp[temp.length - 1]) : [];
    return result;
  }
};
