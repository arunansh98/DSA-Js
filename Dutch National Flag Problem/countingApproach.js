/*
Sort an array of 0s, 1s and 2s | Dutch National Flag problem using Counting Approach
*/

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1,0,1,2]
let cnt0 = 0;
let cnt1 = 0;
let cnt2 = 0;

arr.forEach(ele=>{
    switch(ele){
        case 0 : cnt0++;
                 break;
        case 1 : cnt1++;
                 break;
        case 2 : cnt2++;
                 break;                 
    }
})

let i = 0;
while(cnt0>0){
    arr[i++] = 0;
    --cnt0;
}
while(cnt1>0){
    arr[i++] = 1;
    --cnt1;
}
while(cnt2>0){
    arr[i++] = 2;
    --cnt2;
}

console.log(arr)


/* 
Time Complexity =  O(n)
Space Complexity = O(1)
*/