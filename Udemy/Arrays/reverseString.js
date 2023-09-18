// Create a function that reverses a string.


function reverse1(str){
    str = str.split("");
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        swap(str,i,j);
        i++;
        j--;
    }
    return str.join("");
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let string1 = 'racecar';
// console.log(reverse1(string1)); 



// function reverse2(str){
//     if(!str || str.length < 2 || typeof str!== 'string'){
//         return 'Hmmm thats not good';
//     }

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for(let i = totalItems; i >= 0; i--){
//         backwards.push(str[i]);
//     }
//     return backwards.join("");
// }

function reverse2(str){
    if(!str || str.length < 2 || typeof str!== 'string'){
        return 'Hmmm thats not good';
    }

    let reverse = "";
    const lastIndex = str.length - 1;
    for(let i = lastIndex; i >= 0; i--){
        reverse = reverse + str[i];
    }
    return reverse;
}

function reverse3(str){
    return str.split("").reverse().join("");
}

const reverse4 = str => [...str].reverse().join("");

let string2 = 'racecars';
console.log(reverse2(string2)); 