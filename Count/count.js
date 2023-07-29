/* 
Write a program to count number of elements in an array using recursion
*/

var count = function(arr){
    if(arr.length === 1){
        return 1;
    }
    else {
        return 1 + count(arr.slice(1));
    }
}

let arr = [1,2,3,3,4,5,5,5,5,5]

console.log(count(arr))

