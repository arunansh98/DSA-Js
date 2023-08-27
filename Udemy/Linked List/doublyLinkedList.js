// let myLinkedList = {
//     head: {
//         value: 10, 
//         next:{
//             value : 5,
//             next: {
//                 value : 16,
//                 next: null
//             }
//         }
//     }
// }

// 1--> 10-->99-->5-->16

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value : value,
            prev:null,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value : value,
            prev : null,
            next : null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value : value,
            prev : null,
            next : null
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index,value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value : value,
            prev:null,
            next:null
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        if(index === 0){
            this.head = this.head.next;
        }
        else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            const nextNode = unwantedNode.next;
            leader.next = unwantedNode.next;
            if(nextNode){
                nextNode.prev = leader;
            }
            this.length--;
            return this.printList();
        }
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);  
myLinkedList.insert(20,88);
myLinkedList.remove(5);
myLinkedList.remove(2);



console.log(myLinkedList.printList());
// console.log('head',myLinkedList.head);
// console.log('tail',myLinkedList.tail);


// console.log('myLinkedList',myLinkedList)