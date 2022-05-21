const num = parseInt(readline());
let i = 1;
let count = 0;
while (i < num + 1) {
  if (String(i).indexOf("7") !== -1 || i % 7 === 0) {
    count++;
  }
  i++;
}
console.log(count);
