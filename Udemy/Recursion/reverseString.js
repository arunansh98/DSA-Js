// Write a program to reverse a string using recursion.

var reverseString = function(string,index){ // O(n)
    if(index === string.length - 1){ // base case
        return string[index];
    }
    return reverseString(string, index + 1) + string[index]; //recursive case
}

let string = 'abcd';
console.log(reverseString(string,0));