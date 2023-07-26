/* 
Write a program to search an element in a sorted array using binary search
*/

let arr = [1,2,3,4,5,6,7,8] 
let low = 0; 
let high = arr.length - 1; 
let mid; 
let element = 5;  
let found = false;
let foundIndex;
while(low<=high){
    mid =  parseInt((low + high)/2);
    if(arr[mid]===element){
        found = true;
        foundIndex = mid;
        break;
    }
    else if(arr[mid] > element){
        high = mid - 1;
    }
    else if(arr[mid] < element){
        low = mid + 1;
    }
}
console.log(`Element ${element} ${found ? `found at index ${foundIndex}` : 'not found'}`)

/* 
Time Complexity =  O(log n to the base 2)
Space Complexity = O(1)
*/