let nega = 0;
let pos = 0;
let val = 0;
while ((cur = parseInt(readline()))) {
  if (cur >= 0) {
    val += cur;
    pos++;
  } else if (cur < 0) {
    nega++;
  }
}
console.log(nega);
console.log((pos != 0 ? val / pos : 0).toFixed(1));
