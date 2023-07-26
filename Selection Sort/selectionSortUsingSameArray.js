/*
Write a program to sort an array using selection sort | Using One Array(Same Array)
*/

let arr = [9,10,2,-11,41,40]
let smallest = -1;
let i = 0;
while(i < arr.length - 1){
        smallest = findSmallestIndex(arr,i);
        swap(smallest,i,arr);
        ++i;
    }

console.log('Sorted Array => ',arr);

function swap(index1,index2,arr){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function findSmallestIndex(arr,startIndex){
    let smallest = Number.MAX_VALUE;
    let smallestIndex = -1;
    let element;
    while(startIndex < arr.length) {
        element = arr[startIndex];
       if(element < smallest){
        smallest = element;
        smallestIndex = startIndex;
       } 
       ++startIndex;
    }
    return smallestIndex;
}