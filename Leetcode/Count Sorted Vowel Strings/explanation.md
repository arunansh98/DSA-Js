# Explanation :

### for n = 1,

sum[1] = 1 + 1 + 1 + 1 + 1 = 5

### for n = 2,

sum[2] = 5 + 4 + 3 + 2 + 1 = 15

### for n = 3,

sum[3] = 15 + 10 + 6 + 3 + 1 = 35

### for n = 4,

sum[4] = 35 + 20 + 10 + 4 + 1 = 70

### ... similarly for n, we have the pattern as,

sum[n] = sum[n-1] + (sum[n][0] - sum[n-1][0]) + (sum[n][1] - sum[n-1][1]) + (sum[n][2] - sum[n-1][2]) + (sum[n][3] - sum[n-1][3])
