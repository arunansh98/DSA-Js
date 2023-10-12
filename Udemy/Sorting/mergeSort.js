
function mergeSort1(array,left,right){
    if(array.length === 1){
        return;
    }
    // Split array in into right and left
    if(left < right){
        let mid = parseInt((left+right)/2);
        mergeSort1(array,left,mid);
        mergeSort1(array,mid + 1,right);
        merge1(left,right,mid,array)
    }

}

function merge1(left,right,mid,array){
    let leftArray = [];
    let rightArray = [];
    let i = left;
    while(i <= mid){
        leftArray.push(array[i]);
        i++;
    }
    let j = mid + 1;
    while(j <= right){
        rightArray.push(array[j]);
        j++;
    }
    let k = left;
    i = 0;
    j = 0;
    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i] < rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i < leftArray.length){
        array[k] = leftArray[i];
        i++;
        k++;
    }
    while(j < rightArray.length){
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

function mergeSort2(array){
    if(array.length === 1){
        return array;
    }

    let length = array.length;
    let middle = parseInt(length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    return merge2(
        mergeSort2(left),
        mergeSort2(right)
    );
}

function merge2(left,right){
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            mergedArray.push(left[i]);
            i++;
        }
        else {
            mergedArray.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        mergedArray.push(left[i]);
        i++;
    }

    while(j < right.length){
        mergedArray.push(right[j]);
        j++;
    }

    return mergedArray;
}




const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];

// mergeSort2(numbers);
console.log(mergeSort2(numbers));