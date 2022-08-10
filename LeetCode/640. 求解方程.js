/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const [left, right] = equation.split("=");
  const leftList = left.split(/(\+|\-)/g);
  const rightList = right.split(/(\+|\-)/g);
  const leftObj = {
    value: 0,
    xCount: 0,
  };
  let flag = "+";
  leftList.forEach((item) => {
    if (item.endsWith("x")) {
      const xCount = Number(flag + (item.slice(0, item.length - 1) || 1));
      leftObj.xCount += xCount;
    } else if (item == "-") {
      flag = "-";
    } else if (item == "+") {
      flag = "+";
    } else if (item === "") {
    } else {
      leftObj.value += Number(flag + item);
    }
  });
  flag = "+";
  const rightObj = {
    value: 0,
    xCount: 0,
  };
  rightList.forEach((item) => {
    if (item.endsWith("x")) {
      const xCount = Number(flag + (item.slice(0, item.length - 1) || 1));
      rightObj.xCount += xCount;
    } else if (item == "-") {
      flag = "-";
    } else if (item == "+") {
      flag = "+";
    } else if (item === "") {
    } else {
      rightObj.value += Number(flag + item);
    }
  });
  if (leftObj.xCount === rightObj.xCount) {
    if (leftObj.value !== rightObj.value) {
      return "No solution";
    }
    return "Infinite solutions";
  }
  const value = leftObj.value - rightObj.value;
  const xCount = rightObj.xCount - leftObj.xCount;
  const res = value / xCount;
  return `x=${res}`;
};
