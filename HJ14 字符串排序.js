const arr = [];
while ((input = readline())) {
  if (input != input - 0) {
    arr.push(input);
  }
}
arr.sort();
arr.forEach((item) => {
  console.log(item);
});
