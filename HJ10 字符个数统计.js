const str = readline();
const resSet = new Set();
str.split("").forEach((item) => {
  resSet.add(item);
});
console.log([...resSet].length);
