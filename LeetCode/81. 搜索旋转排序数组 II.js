/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function (nums, target) {
        let i = 0;
        while (i < nums.length) {
          if (nums[i] === target) {
            return true;
          }
          if (nums[i + 1] !== undefined && nums[i] > nums[i + 1]) {
            if (nums[i] < target || nums[nums.length - 1] < target) {
              return false;
            }
          }
          i++;
        }
        return false;
      };
console.log(search([2, 2, 2, 3, 2, 2, 2], 3));
