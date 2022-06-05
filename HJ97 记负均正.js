readline();
const input = readline().split(" ");
let i = 0;
const arr = [];
let nega = 0;
let pos = 0;
let val = 0;
while (i < input.length) {
  num = parseInt(input[i]);
  if (num < 0) {
    nega++;
  } else if (num > 0) {
    pos++;
    val += parseInt(input[i]);
  }
  i++;
}
console.log(`${nega} ${(pos != 0 ? val / pos : 0).toFixed(1)}`);
