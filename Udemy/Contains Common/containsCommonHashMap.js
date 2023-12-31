/* 
Write a program to check if there are any common elements between two arrays -> return True / False
*/

/* Using Hash Map */

var containsCommon = function(a,b) {
    let hashMap = {};
    for(let i = 0; i < a.length; i++){ // O(a)
        if(!hashMap[a[i]]){
            hashMap[a[i]] = true;
        }
    }
    for(let j = 0; j < b.length; j++){ // O(b)
        if(hashMap[b[j]]){
            return true;
        }
    }
    return false;
}

let a = ['a','b','c','x'] 
let b = ['z','y','b']
console.log(containsCommon(a,b));


// Time Complexity  -> O(a + b)
// Space Complexity  -> O(a)
