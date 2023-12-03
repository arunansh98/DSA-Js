# Explanation

Lets say you have to calculate all possible BT from 7 nodes.

so what we will do is, we will break down the number of nodes into and left and right and calculate possible BST of each number of left and right nodes,

out of 7 nodes we have 1 node which is the root node,

then the no of nodes on left and right are,

| Left | Right |
| ---- | ----- |
| 1    | 5     |
| 3    | 3     |
| 5    | 1     |

Therefore, we will calculate possible BSTs for each no of left and right nodes,

for 1,

we have only the root node

for 5, we have one root node and for left and right nodes we have,

| Left | Right |
| ---- | ----- |
| 1    | 3     |
| 3    | 1     |

Similarly for 3 we have one root node and for left and right nodes we have,

| Left | Right |
| ---- | ----- |
| 1    | 1     |
