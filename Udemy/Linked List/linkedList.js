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

class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value : value,
            next : null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value : value,
            next : null
        }
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
            next:null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
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

    // my method
    insert1(index,value){
        if(index === 0){
            return this.prepend(value);
        }
        else{
            const newNode = {
                value : value,
                next : null
            };
            let currentNode = this.head;
            let previousNode = null;
            for(let i = 0; i < index; i++){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            newNode.next = previousNode.next;
            previousNode.next = newNode; 
            this.length++;
            return this;
        }
    }

    remove(index){
        if(index === 0){
            this.head = this.head.next;
        }
        else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.length--;
            return this.printList();
        }
    }

    // my method(only reversing the values not the nodes itself)
    reverse1(){
        if(this.length > 1){
            let startNode = this.head;
            let startIndex = 0;
            let endIndex = this.length - 1;
            let endNode = this.traverseToIndex(endIndex);
            while(startIndex < endIndex){
                this.swap(startNode,endNode);
                startIndex++;
                startNode = startNode.next;
                endNode = this.traverseToIndex(--endIndex);  
            }
        }
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

    swap(node1,node2){
        let temp = node1.value;
        node1.value = node2.value
        node2.value = temp;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.remove(5);
myLinkedList.reverse();

// console.log(myLinkedList.remove(2));



console.log(myLinkedList.printList());


// console.log('myLinkedList',myLinkedList)