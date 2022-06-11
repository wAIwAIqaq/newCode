/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const l = nums1.length + nums2.length;
    const m = l % 2 === 0 ? (l / 2) : (parseInt(l / 2) + 1);
    console.log(m);
    if (nums1[1] === 0 && nums1[nums1.length - 2] === 0 && nums2[0] === 0 && nums2[nums2.length - 1] === 0) {
        return (nums1[0] + nums1[nums1.length - 1]) / 2;
    } else if (nums2[1] === 0 && nums2[nums2.length - 2] === 0 && nums1[0] === 0 && nums1[nums1.length - 1] === 0) {
        return (nums2[0] + nums2[nums2.length - 1]) / 2;
    }
    const newArr = []
    while (newArr.length < m) {
        if (nums1.length === 0) {
            newArr.push(nums2[0]);
            nums2.shift()
        } else if (nums2.length === 0) {
            newArr.push(nums1[0]);
            nums1.shift();
        }
        else if (nums1[0] < nums2[0]) {
            newArr.push(nums1[0]);
            nums1.shift();
        } else {
            newArr.push(nums2[0]);
            nums2.shift();
        }
    }
    console.log(nums1);
    console.log(nums2);
    console.log(newArr);
    console.log(nums1[0] > nums2[0] ? nums1[0] : nums2[0]);
    return l % 2 === 0 ? (newArr[newArr.length - 1] + (nums1[0] > nums2[0] ? nums2[0] : nums1[0] || nums1[0] || nums2[0])) / 2 : newArr[newArr.length - 1]

};
console.log(findMedianSortedArrays([0, 0, 0, 0, 0]
    , [-1, 0, 0, 0, 0, 0, 1]));