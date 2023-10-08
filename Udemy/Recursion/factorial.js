// Write two functions that finds the factorial of any number. One should be recursive, the other should 
// just use a loop.




function findFactorialRecursive(number){
    if(number === 0){
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){
    let answer = 1;
    while(number >= 2){
        answer = answer * number;
        number--;
    }
    return answer;
}

let number = 6;
// console.log(findFactorialIterative(number));
console.log(findFactorialRecursive(number));