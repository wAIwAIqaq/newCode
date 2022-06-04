const str = readline();
let i = 0;
let res = 0;
while (i < str.length) {
  if (str[i] >= "A" && str[i] <= "Z") {
    res++;
  }
  i++;
}
console.log(res);
