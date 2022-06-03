const count = parseInt(readline());
const val = count * count * count;
const arr = [];
let m = -count + 1;
for (let i = 0; i < count; i++) {
  const item = val / count + m;
  m += 2;
  arr.push(item);
}
console.log(arr.join("+"));
