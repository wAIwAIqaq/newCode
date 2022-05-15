var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = line;
  const inputArr = input.split(" ");
  const total = input[0];
  const index = inputArr.pop();
  const target = inputArr.pop();
  const arr = inputArr.slice(1, inputArr.length);
  const targetSort = target.split("").sort().join("");
  const broArr = [];
  arr.forEach((item) => {
    if (item.length === target.length && item !== target) {
      const itemSort = item.split("").sort().join("");
      if (itemSort === targetSort) {
        broArr.push(item);
      }
    }
  });
  const sortBros = broArr.sort();
  console.log(sortBros.length);
  if (sortBros[index]) {
    console.log(sortBros[index - 1]);
  }
});
