while ((input = readline())) {
  const a = parseInt(input.split("/")[0]);
  const b = parseInt(input.split("/")[1]);
  let i = 0;
  let arr = [];
  while (i < a) {
    arr.push(`1/${b}`);
    i++;
  }
  console.log(arr.join("+"));
}
