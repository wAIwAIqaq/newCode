const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
swap(arr, i, j);
let i = 4;
let j = 7;
function swap(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
console.log(arr);
