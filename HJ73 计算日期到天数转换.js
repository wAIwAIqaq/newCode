const arr = readline().split(" ").map(Number);
console.log(
  (new Date(arr[0], arr[1] - 1, arr[2]) - new Date(arr[0], 0, 0)) /
    (24 * 60 * 60 * 1000)
);
