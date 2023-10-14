function linearSearch(array,item){
    let i = 0;
    while(i < array.length){
        if(array[i] === item){
            return 'Element found at index ' + i;
        }
        i++;
    }
    return 'Element not found !!!';
}


let array = [
    0,  1,  2,  4,  5,
    6, 44, 63, 87, 99,
  283
]
let item = 44;
console.log(linearSearch(array,item));

