/* 
Write a program to check if there are any common elements between two arrays -> return True / False
*/

/* Using Binary Search Approach */

var containsCommon = function(a,b) {
    let i = 0;
    a = a.sort((a,b)=>a-b); // nlogn 
    while(i < b.length){ // n
        if(containsEle(a,b[i])){ // logn
            return true;
        }
        i++;
    }
    return false;
}

// perform binary search
var containsEle = function(arr,element){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while(low <= high){
        mid = parseInt((low+high)/2);
        if(arr[mid]===element){
            return true;
        }
        else if(element > arr[mid]){
            low = mid + 1;
        }
        else if(element < arr[mid]){
            high = mid - 1;
        }
    }
    return false;
}

let a = ['a','b','c','x'] 
let b = ['z','y','x']
console.log(containsCommon(a,b));


// O(nlogn + nlogn = 2nlogn  = nlogn) = O(nlogn)
