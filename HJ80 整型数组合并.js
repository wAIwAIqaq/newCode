readline();
const arr1 = readline().split(" ").map(Number);
readline();
const arr2 = readline().split(" ").map(Number);
const arr = [...new Set([...arr1, ...arr2])].sort((a, b) => {
  return a - b;
});
console.log(arr.join(""));
