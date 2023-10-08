// Give a number N return the index value of the Fibonacci sequence, where the sequence is :

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means
// that for N = 5 => 2 + 3


function fibonacciIterative(n){ // O(n)
    let array = [0,1];
    if(n > 1){
        for(let i = 1; i <= n - 1; i++){
            array.push(array[i] + array[i-1]);
        }
    }
    return array[n];
}

function fibonacciRecursive(n){ // O(2^n) -> not the ideal solution even if it seems simpler
    if(n < 2){
        return n;
    }
    else {
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
}

let n = 9; // index of the fibonacci
// console.log(fibonacciIterative(n,1));
console.log(fibonacciRecursive(n));

