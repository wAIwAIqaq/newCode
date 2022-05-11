const count = readline();
const tempSet = new Set();
const n = parseInt(count);
let i = 0;
for (let i = 0; i < count; i++) {
  const val = readline();
  tempSet.add(val);
}
const resArr = [...tempSet].sort((a, b) => {
  return a - b;
});
resArr.forEach((item) => console.log(item));
