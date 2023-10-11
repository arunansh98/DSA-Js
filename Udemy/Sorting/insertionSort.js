
function insertionSort(array){
    if(array.length === 0 || array.length === 1){
        return array;
    }
    let j = 1;
    let k;
    while(j < array.length){
        k = j;
        while(array[k] < array[k-1] && k >=0){
            swap(array,k,k-1);
            k--;
        }
        j++;
    }
    return array;
}

function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}



const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

insertionSort(numbers);
console.log(numbers);