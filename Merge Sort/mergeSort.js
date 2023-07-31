/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums,0,nums.length - 1);
}

var mergeSort = function(arr,low,high) {
    if(low < high){
      let mid;
      mid = parseInt((low+high)/2);
      mergeSort(arr,low,mid);
      mergeSort(arr,mid+1,high);
      merge(low,mid,high,arr);  
    }
}

var merge = function(low,mid,high,arr){
    let i,j,k,newArr;
    i = low;
    j = mid + 1;
    k = low;
    newArr = [...arr];
    while(i<=mid && j<=high){
        if(newArr[i]<=newArr[j]){
            arr[k++] = newArr[i++];
        }
        else {
            arr[k++] = newArr[j++];
        }
    }
    while(i<=mid){
        arr[k++] = newArr[i++];
    }
    while(j<=high){
        arr[k++] = newArr[j++];
    }
}

arr = [5,4,0,-1,-1,2,1];
sortArray(arr);
console.log(arr);