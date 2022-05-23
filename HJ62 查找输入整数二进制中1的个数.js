while ((num = parseInt(readline()))) {
  const arr = num.toString(2).split("");
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    if (arr[i] === "1") {
      count++;
    }
    i++;
  }
  console.log(count);
}
