let user = {
    age:54,
    name:"Kylie",
    magic:true,
    scream : function(){
        console.log('ahhhh!');
    }
}

console.log(user.age); // O(1)
user.spell = 'abra kadabra' // O(1) 
console.log(user);
user.scream(); // O(1)


class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    // set(key,value){
    //     this.data.push([key,value]);
    // }

    set(key,value){ // O(1)
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    // get(key){
    //     return this.data.filter(item => item[0] === key)[0][1];
    // }

    get(key){ // O(1)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    _hash(key){ // O(1)
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    keys(){ 
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                for(let j = 0; j < this.data[i].length;j++){
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(2);
// myHashTable.set('grapes',10000);
// console.log(myHashTable.get('grapes'));
myHashTable.set('grapes',10002);
myHashTable.set('apples',10000);
myHashTable.set('mango',10000);
myHashTable.set('banana',10000);
console.log(myHashTable.keys());

console.log('myHashTableData',myHashTable.data)
