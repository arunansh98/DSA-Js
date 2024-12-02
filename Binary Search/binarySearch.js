function binarySearchRecursion(array, low, high, element) {
  if (low > high) {
    return "Element not found !!!";
  }
  let mid = parseInt((low + high) / 2);
  if (array[mid] > element) {
    return binarySearchRecursion(array, low, mid - 1, element);
  } else if (array[mid] < element) {
    return binarySearchRecursion(array, mid + 1, high, element);
  } else {
    return `Element found at position ${mid}`;
  }
}

let array = [1, 2, 3, 4, 5, 6];
console.log(binarySearchRecursion(array, 0, array.length - 1, 4));
