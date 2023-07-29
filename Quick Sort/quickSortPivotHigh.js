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
    let pivot = arr[high]; 
    while(j <= high) {
        if(arr[j] < pivot){
            i++;
            swap(j,i,arr);
        }
        j++;
    }
    swap(i + 1,high,arr);
    return i + 1;
}

var swap = function(a,b,arr){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(sortArray([5,4,3,2,-1,-1,1]))