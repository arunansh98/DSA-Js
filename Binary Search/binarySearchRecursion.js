/* 
Write a program to search an element in a sorted array using binary search and recursion
*/

let arr = [-1,1,3,5,8] 

let element = 7;

var binarySearch = function(arr,ele,low,high){
    mid = parseInt((low + high)/2);
    if(arr[mid]===ele){
        return mid;
    }
    if(low>mid){
        return -1;
    }
    else {
        if(ele > arr[mid]){
            return binarySearch(arr,ele,mid + 1,high);
        }
        else {
            return binarySearch(arr,ele,low,mid-1);
        }
    }
}

console.log(binarySearch(arr,element,0,arr.length-1))
