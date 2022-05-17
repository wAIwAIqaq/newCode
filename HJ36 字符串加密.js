const arr = [...new Set(readline().split(""))];
const indexArr = arr.map((item) => {
  return item.charCodeAt() - 97;
});
const allUpperArr = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
  " "
);
const allArr = [
  ...allUpperArr.map((item) => {
    return item.toLowerCase();
  }),
  ...allUpperArr,
];
const restAllArr = allArr.map((item) => {
  if (
    !arr.some((item1) => {
      return item1 === item;
    })
  ) {
    return item;
  }
});
const finalArr = [...arr, ...restAllArr.filter((item) => item)];
const inputIndex = readline()
  .split("")
  .map((item) => {
    return item.charCodeAt() - 97;
  });
let res = "";
inputIndex.forEach((item) => {
  res += finalArr[item];
});
console.log(res);
