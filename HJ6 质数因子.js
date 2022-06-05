let num = parseInt(readline());
const arr = [];
let i = 2;
while (i < num && Math.pow(i, 2) <= num) {
  if (num % i == 0) {
    num = num / i;
    arr.push(i);
    i = 1;
  }
  i++;
}
arr.push(num);
console.log(arr.join(" "));
