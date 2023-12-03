/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let hash;
var allPossibleFBT = function (n) {
  let hash = {};
  var calculateBST = function (n) {
    if (n % 2 === 0) {
      return [];
    }
    if (n === 1) {
      hash[1] = [new TreeNode(0)];
      return hash[1];
    }
    if (hash[n]) {
      return hash[n];
    }
    let ans = [];
    let left;
    let right;
    let root;
    for (let i = 1; i < n; i += 2) {
      left = calculateBST(i);
      right = calculateBST(n - i - 1);
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          root = new TreeNode(0);
          root.left = left[j];
          root.right = right[k];
          ans.push(root);
        }
      }
    }
    hash[n] = ans;
    return hash[n];
  };
  return calculateBST(n);
};
