/*
Write a program to sort an array using selection sort | Using Two Arrays(A new array also to store sorted elements)
*/

let arr = [9,10,2,11,41,40]
let newArr = [];
let smallest = -1;
while(arr.length > 0){
        smallest = findSmallestIndex(arr);
        newArr.push(arr[smallest])
        arr = arr.filter((_ele,index)=> index!==smallest)
    }

console.log('Sorted Array => ',newArr);

function findSmallestIndex(arr){
    let smallest = Number.MAX_VALUE;
    let smallestIndex = -1;
    arr.forEach((element,index) => {
       if(element < smallest){
        smallest = element;
        smallestIndex = index
       } 
    });
    return smallestIndex;
}