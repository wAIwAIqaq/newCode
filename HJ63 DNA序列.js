let arr = readline().split("");
let len = readline();
let i = len;
let s = [...arr.slice(0, len)];
let res = [...s];
let radio = 0;
while (i < arr.length) {
  let count = 0;
  s.forEach((item) => {
    if (item == "C" || item == "G") {
      count++;
    }
  });
  if (count > radio) {
    radio = count;
    res = [...s];
  }
  s.shift();
  s.push(arr[i]);
  i++;
}
console.log(res.join(""));
