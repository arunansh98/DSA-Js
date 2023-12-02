# Explanation

Starting at the last index, keep calculating the cost at each index. For calculating the cost of each index, check the value of next index (i+ 1) and next to next index(i + 2) and append the smaller value out of the both to the cost of the current index.

for example :-

arr = [10, 1, 2];

## Index 2 (last index)

cost[2] = cost[2] + smaller(cost[3],cost[4]);

now since index 3 and 4 are out of bounds, we will consider their cost as 0, so
cost[3] = 0, cost[4] = 0,

cost[2] = 2 + smaller(0,0) = 2 + 0 = 2

### cost[2] = 2

## Index 1

cost[1] = cost[1] + smaller(cost[2],cost[3]);

cost[2] = 2, cost[3] = 0,

cost[1] = 1 + smaller(2,0) = 1 + 0 = 1

### cost[1] = 1

## Index 0

cost[0] = 10

cost[0] = cost[0] + smaller(cost[1],cost[2]);

cost[1] = 1, cost[2] = 2

cost[0] = 10 + smaller(1,2) = 10 + 1 = 11

### cost[0] = 11

Now after calculating cost of all the indexes, return the smaller value out of index 0 and 1,

### minCost = smaller(cost[0], cost[1]) = smaller(11,1) = 1

# so, minCost = 1
