const count = parseInt(readline());
let i = 0;
const arr = [];
while (i < count) {
  const temp = readline().split(" ").map(Number);
  arr.push(temp);
  i++;
}
const str = readline();
const stack = [];
let res = 0;
i = 0;
while (i < str.length) {
  if (str[i] === "(") {
  } else if (str[i] === ")") {
    if (stack.length > 1) {
      const next = stack.pop();
      const prev = stack.pop();
      res += prev[0] * prev[1] * next[1];
      stack.push([prev[0], next[1]]);
    }
  } else {
    stack.push(arr[str[i].charCodeAt() - 65]);
  }
  i++;
}
console.log(res);
