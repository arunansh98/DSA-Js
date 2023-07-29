/*
Calculate sum using recursion
*/

/*
1st method :- Slice Method
*/
var sum1 = function(arr){
    if(arr.length === 1){
        return arr[0];
    }
    else {
        return arr[0] + sum1(arr.slice(1));
    }
}

let arr1= [1,2,3,4]

console.log(sum1(arr1));

/*
2nd method :- Using Index(i) argument to function
*/
var sum2 = function(arr,i){
    if(i === arr.length - 1){
        return arr[i];
    }
    else {
        return arr[i] + sum2(arr,i+1);
    }
}

let arr2 = [1,2,3,4]

console.log(sum2(arr2,0));