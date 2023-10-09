var bubbleSort = function(array){ // O(n^2)
    let i = 0;
    while(i < array.length){
        j = 0;
        while(j < array.length - 1){
            if(array[j] > array[j + 1]){
                swap(array,j,j+1);
            }
            j++;
        }
        i++;
    }
    return array;
}

var swap = function(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(array));