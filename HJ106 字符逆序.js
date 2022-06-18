const arr = "I am a student".split("");
let left = 0;
let right = arr.length - 1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}
console.log(arr.join(""));
