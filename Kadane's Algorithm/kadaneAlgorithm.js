/*
Largest Sum Contiguous Subarray (Kadane’s Algorithm) //
Keep on adding the elements and compare with the current max and replace if greater than max, but if the sum at any point becomes negative, make the sum to be zero(if we need to calculate max sum, then we cant take a negative value forward)
*/

let arr = [-2, -3, 4, -1, -2, 1, 5, -3]
let max = Number.MIN_VALUE;
let sum = 0;
arr.forEach((ele,index)=>{
    sum = sum + ele;
    if(max<sum){
        max = sum;
    }
    if(sum<0){
        sum = 0;
    }
})
console.log(max)

/* 
Time Complexity =  O(n)
Space Complexity = O(1)
*/