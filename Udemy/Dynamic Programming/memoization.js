function addTo80(n) {
  console.log("long time");
  return n + 80;
}

function memoizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("small time");
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizeAddTo80();

console.log(memoized(5));
console.log(memoized(5));
