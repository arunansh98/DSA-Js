var selectionSort1 = function(array){ // O(n^2)
    let i = 0;
    while(i < array.length - 1){
        j = i + 1;
        while(j < array.length){
            if(array[j] < array[i]){
                swap(array,j,i);
            }
            j++;
        }
        i++;
    }
    return array;
}

var selectionSort2 = function(array){ // O(n^2)
    let i = 0;
    let min;
    while(i < array.length - 1){
        j = i + 1;
        min = array[i];
        minIndex = i;
        while(j < array.length){
            if(array[j] < min){
                min = array[j];
                minIndex = j;
            }
            j++;
        }
        swap(array,minIndex,i);
        i++;
    }
    return array;
}

var selectionSort3 = function(array){ // O(n^2)
    let i = 0;
    let min;
    while(i < array.length - 1){
        j = i + 1;
        min = i;
        temp = array[i];
        while(j < array.length){
            if(array[j] < array[min]){
                min = j;
            }
            j++;
        }
        array[i] = array[min];
        array[min] = temp;
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
// console.log(selectionSort1(array));
console.log(selectionSort3(array));
