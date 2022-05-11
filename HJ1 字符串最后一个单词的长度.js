function getLastLength(str) {
  const arr = str.split(" ");
  return arr[arr.length - 1].length;
}
console.log(getLastLength("hello nowcoder"));
