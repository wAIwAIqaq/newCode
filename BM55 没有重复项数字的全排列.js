function permute(nums) {
  // write code here
  const res = [];
  getAllSort(nums, []);
  function getAllSort(nums, curArr) {
    if (nums.length != 0) {
      let i = 0;
      while (i < nums.length) {
        const nextNums = nums.slice();
        curArr.push(nums[i]);
        nextNums.splice(i, 1);
        getAllSort(nextNums, curArr);
        debugger;
        curArr.pop();
        i++;
      }
    } else {
      res.push([...curArr]);
      return;
    }
  }
  return res;
}
// permute([1, 2, 3, 4 , 5, 6]);
