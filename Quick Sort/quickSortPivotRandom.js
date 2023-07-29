/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums,0,nums.length-1);
    return nums;
}

var quickSort = function(arr,low,high) {
    if(low < high){ 
        let pivot = partition(arr,low,high); 
        quickSort(arr,low,pivot-1);
        quickSort(arr,pivot+1,high);
    }
}

var partition = function(arr,low,high){
    let j = low;
    let i = low - 1;
    let pivotIndex = getRndInteger(low,high);
    let pivot = arr[pivotIndex];  
    while(j <= high) {
        if(arr[j] < pivot){
            i++;
            if(arr[i]===pivot){
                pivotIndex = j;
            }
            swap(j,i,arr);
        }
        j++;
    }
    swap(i + 1,pivotIndex,arr);
    return i + 1;
}

var swap = function(a,b,arr){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

var getRndInteger= function(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(sortArray([5,4,3,2,-1,-1,1]))