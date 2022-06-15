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
permute([1, 2, 3, 4 , 5, 6]);
          cur            nums
         [1,2,3]        [4,5,6];
i = 0    [1,2,3,4]      [5,6]      delete 4
i = 1    [1,2,3,5]      [4,6]      delete 5
i = 2    [1,2,3,6]      [4,5]      delete 6
