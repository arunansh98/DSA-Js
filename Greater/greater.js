
/* 
Write a program to find the greatest element in an array using recursion
*/

var greater = function(arr,i,greatest){
    if(i === arr.length - 1){
        if(arr[i]>greatest){
            return arr[i];
        }
        else{
            return greatest;
        }
    }
    else {
        if(arr[i]>greatest){
            return greater(arr,i+1,arr[i]);
        }
        else {
            return greater(arr,i+1,greatest);
        }
    }
}

let arr = [1,2,100,3,3,4,200,5,5,5,5]

console.log(greater(arr,0,arr[0]))

