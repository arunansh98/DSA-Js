function binarySearch(array,item){
    let low = 0;
    let high = array.length - 1;
    let mid;
    while(low <= high){
        mid = parseInt((low+high)/2);
        if(item > array[mid]){
            low = mid + 1;
        }
        else if(item < array[mid]){
            high = mid - 1;
        }
        else {
            return 'Element found at index ' + mid;
        }
    }
    return 'Element not found !!!';
}


let array = [
    0,  1,  2,  4,  5,
    6, 44, 63, 87, 99,
  283
]
let item = -1;
console.log(binarySearch(array,item));

