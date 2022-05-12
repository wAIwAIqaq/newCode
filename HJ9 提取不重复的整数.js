const str = readline();
let i = str.length - 1;
const set = new Set();
while (i >= 0) {
  if (str[i] !== 0) {
    set.add(str[i]);
  }
  i--;
}
console.log([...set].join(""));
