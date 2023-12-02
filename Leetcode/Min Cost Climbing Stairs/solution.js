/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let i = cost.length;
  cost[i] = 0;
  cost[i + 1] = 0;
  i = i - 1;
  while (i >= 0) {
    if (cost[i + 1] < cost[i + 2]) {
      cost[i] += cost[i + 1];
    } else {
      cost[i] += cost[i + 2];
    }
    i--;
  }
  return cost[0] < cost[1] ? cost[0] : cost[1];
};

/**
 * Time Complexity  - O(n)
 * Space Complexity - O(1)
 */
