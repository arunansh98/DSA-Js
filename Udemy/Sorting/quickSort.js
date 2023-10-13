function quickSort(array){
    if(array.length === 0){
        return [];
    }
    const pivotIndex = parseInt(Math.random() * (array.length -1));
    let left = array.filter((item,index)=> item <= array[pivotIndex] && index !== pivotIndex);
    let right = array.filter(item=> item > array[pivotIndex]);
    return quickSort(left).concat([array[pivotIndex]]).concat(quickSort(right));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4,4,4,4,4];
console.log(quickSort(numbers));
