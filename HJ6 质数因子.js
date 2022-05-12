const input = readline();
let num = input;
let index = 2;
let res = "";
while (index <= num && index ^ (2 <= num)) {
  while (num % index === 0) {
    res += `${index} `;
    num /= index;
  }
  index++;
}
if (num > 1) res += `${num} `;
console.log(res);
