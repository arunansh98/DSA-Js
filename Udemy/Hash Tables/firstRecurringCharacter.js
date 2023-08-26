// Google Question

// Brute force method - Time Complexity - O(n^2)
// Space Complexity = O(n)
var firstRecurringCharacter1 = function(array){
    let recurringIndexes = [];
    for(let i = 0; i < array.length - 1; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                recurringIndexes.push(j);
            }
        }
    }
    return recurringIndexes.length > 0 ? array[Math.min(...recurringIndexes)] : undefined;
}


// Hash Map method - Time complexity - O(n)
// Space complexity - O(n)
var firstRecurringCharacter2 = function(array){
    let obj = {};
    for(let i = 0; i < array.length; i++){
        if(obj[array[i]]){
            return array[i];
        }
        else {
            obj[array[i]] = true;
        }
    }
    return undefined;
}

// let array = [2,1,1,2,3,5,1,2,4];
// let array = [2,5,5,2,5];
let array = [2,3,3,2];


console.log(firstRecurringCharacter1(array));



