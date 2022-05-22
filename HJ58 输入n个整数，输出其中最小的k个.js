const input = readline().split(" ");
const len = input[0];
const count = input[1];
const arr = readline()
  .split(" ")
  .sort((a, b) => a - b);
let i = 0;
const res = [];
while (i < count) {
  res.push(arr[i]);
  i++;
}
console.log(res.join(" "));
