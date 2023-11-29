let calculations = 0;

/* Time Complexity - O(2^n) */
function fibonacci(n) {
  calculations++;
  console.log("calculations", calculations);
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* Time Complexity - O(n) */
function fibonacciCache() {
  let cache = {};
  function fibonacci(n) {
    calculations++;
    if (cache[n] !== undefined) {
      console.log("using caching !!!");
      return cache[n];
    } else {
      console.log("long time !!!");
      if (n < 2) {
        cache[n] = n;
        return n;
      }
      cache[n - 1] = fibonacci(n - 1);
      cache[n - 2] = fibonacci(n - 2);
      return cache[n - 1] + cache[n - 2];
    }
  }
  return fibonacci;
}

const memoizedFibonacci = fibonacciCache();
console.log(memoizedFibonacci(10));

/* Time Complexity - O(n) */
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
// console.log("Slow", fibonacci(35));
// console.log("DP", fasterFib(35));
console.log("MY DP", memoizedFibonacci(100));
console.log("we did " + calculations + " calculations");
