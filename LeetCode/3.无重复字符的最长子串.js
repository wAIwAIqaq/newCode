/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     const newArr = s.split('');
//     if (!newArr.length) {
//         return 0;
//     }
//     let arr = [];
//     let j = 0;
//     let maxL = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         console.log(i);
//         for (j = i; j < newArr.length; j++) {
//             console.log(j);
//             if (arr.indexOf(newArr[j]) === -1) {
//                 arr.push(newArr[j]);
//                 console.log(arr);
//                 maxL = arr.length > maxL ? arr.length : maxL;
//             } else {
//                 console.log(arr);
//                 maxL = arr.length > maxL ? arr.length : maxL;
//                 arr = [];
//                 break;
//             }
//         }
//     }
//     return maxL
// };
var lengthOfLongestSubstring = function (s) {
    let temp = {};
    let [min, max, long] = [0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        let val = temp[s[i]];
        if (val != undefined && min <= i && min <= val) {
            min = val + 1
        }
        max = i;
        temp[s[i]] = i;
        console.log(temp);
        console.log(temp[s[i]]);
        long = Math.max(long, max - min + 1);
    }
    return long
};
console.log(lengthOfLongestSubstring("ddds"));