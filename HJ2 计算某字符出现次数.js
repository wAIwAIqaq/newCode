// const str = readline();
// const item = readline();
const fn = (str, item) => {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === item.toLowerCase() || str[i] === item.toUpperCase()) {
      count++;
    }
    i++;
  }
  return count;
};
console.log(fn("c", "j"));
