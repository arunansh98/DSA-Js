/**
 *
 * @param {*} string
 * @returns Max sub string along with its length that is non repeating
 */
function nonRepeating(string) {
  let hash = {};
  let max = Number.MIN_VALUE;
  let maxString = "";
  let len;
  let keys;
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = true;
    } else {
      keys = Object.keys(hash);
      len = keys.length;
      if (len > max) {
        max = len;
        maxString = keys.join("");
      }
      hash = {};
    }
  }
  keys = Object.keys(hash);
  len = keys.length;
  if (len > max) {
    max = len;
    maxString = keys.join("");
  }
  console.log("hash", hash);
  return { max, maxString };
}

let string = "ABCDDDEFGHI";
let ans = nonRepeating(string);
console.log(
  "Max non repeating sub string present in string ",
  string,
  " is ",
  ans["maxString"],
  " of length ",
  ans["max"]
);
