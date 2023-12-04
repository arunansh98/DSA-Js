/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let prev, i, sum, currSum, curr;
  i = 2;
  prev = [1, 1, 1, 1, 1];
  while (i <= n) {
    curr = [];
    sum = getSum(prev);
    curr = [sum];
    for (let j = 1; j < 5; j++) {
      currSum = curr[j - 1] - prev[j - 1];
      sum = sum + currSum;
      curr[j] = currSum;
    }
    prev = curr;
    i++;
  }
  return getSum(prev);
};

var getSum = function (array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};
