/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return quickSort(nums);
}

var quickSort = function(arr) {
    if(arr.length>0){ 
        let pivot = arr[getRndInteger(0,arr.length-1)]; 
        let smaller = arr.filter(ele=>ele<pivot);
        let greater = arr.filter(ele=>ele>pivot);
        return [...quickSort(smaller),...Array(arr.length-smaller.length-greater.length).fill(pivot),...quickSort(greater)];
    }
    else {
        return [];
    }
}

console.log(sortArray([5,4,3,-1,-1,2,1]))