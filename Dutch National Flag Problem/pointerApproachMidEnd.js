/*
Sort an array of 0s, 1s and 2s | Dutch National Flag problem using Pointer Approach //
2nd Approach - Taking mid pointer from end
*/

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 2]
let low = 0;
let mid = arr.length - 1;
let high = arr.length - 1;
while(mid>=low){
    switch(arr[mid]){
        case 0 : swap(low++,mid,arr);
                 break;
        case 1 : --mid;
                 break;
        case 2 : swap(mid--,high--,arr);
                 break;                 
    }
}
console.log(arr)

function swap(ind1,ind2,arr){
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

/* 
Time Complexity =  O(n)
Space Complexity = O(1)
*/