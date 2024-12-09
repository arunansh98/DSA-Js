/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  let array = [];
  let hash = {};
  let key = 0;

  for (let i = 1; i < nums.length; i++) {
    if (checkParity(nums[i], nums[i - 1])) {
      hash[key] = i;
    } else {
      key = i;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let low = queries[i][0];
    let high = queries[i][1];
    if (low === high) {
      array.push(true);
    } else {
      while (!hash[low] && low >= 0) {
        low--;
      }
      if (low >= 0) {
        if (high <= parseInt(hash[low])) {
          array.push(true);
        } else {
          array.push(false);
        }
      } else {
        array.push(false);
      }
    }
  }
  return array;
};

var checkParity = function (num1, num2) {
  let parity1 = num1 % 2 === 0;
  let parity2 = num2 % 2 === 0;
  return parity1 !== parity2;
};

/**
 * Time Complexity - O(N + Q) -> where N is the length of nums and Q is the length of queries
 */

console.log(
  isArraySpecial(
    [4, 3, 1, 6],
    [
      [0, 2],
      [2, 3],
    ]
  )
);
