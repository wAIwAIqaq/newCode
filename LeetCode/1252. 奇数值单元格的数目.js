/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const oddM = new Array(m).fill(0);
  const oddN = new Array(n).fill(0);
  indices.forEach((item) => {
    oddM[item[0]]++;
    oddN[item[1]]++;
  });
  console.log(oddM, oddN);
  let M = oddM.filter((item) => (item & 1) !== 0).length;
  let N = oddN.filter((item) => (item & 1) !== 0).length;
  return M * (n - N) + N * (m - M);
};
oddCells(48, 37, [[40, 5]]);
