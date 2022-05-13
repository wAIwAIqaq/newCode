const str = Number(readline()).toString(2);
const res = str.split("").filter((item) => item == 1).length;
console.log(res);
