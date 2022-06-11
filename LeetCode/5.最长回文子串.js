function longestPalindrome(s) {
  if (s.length == 1) {
    return s;
  }
  const arr = s.split("");
  let maxArr = [];
  let i = 0;
  while (i < arr.length) {
    // 两个判断
    let curArr = [];
    // even
    if (arr[i - 1] && arr[i]) {
      let j = 1;
      while (arr[i - j] && arr[i + j - 1] && arr[i - j] == arr[i + j - 1]) {
        curArr.unshift(arr[i - j]);
        curArr.push(arr[i + j - 1]);
        j++;
      }
    }
    maxArr = maxArr.length >= curArr.length ? maxArr : curArr;
    curArr = [];
    j = 1;
    curArr.push(arr[i]);
    // odd
    while (arr[i - j] && arr[i + j] && arr[i - j] == arr[i + j]) {
      curArr.push(arr[i + j]);
      curArr.unshift(arr[i - j]);
      j++;
    }
    maxArr = maxArr.length >= curArr.length ? maxArr : curArr;
    i++;
  }
  return maxArr.join("");
}
console.log(longestPalindrome("aba"));
