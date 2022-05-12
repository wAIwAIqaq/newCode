const map = new Map();
let len = 0;
while ((input = readline())) {
  if (input.split(" ").length === 1) {
    let = 0;
  } else {
    oldVal = map.get(input.split(" ")[0]) || 0;
    map.set(input.split(" ")[0], input.split(" ")[1] - 0 + oldVal);
  }
}
[...map]
  .sort((a, b) => a[0] - b[0])
  .forEach((item) => {
    console.log(`${item[0]} ${item[1]}`);
  });
