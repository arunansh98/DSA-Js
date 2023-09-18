class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.first.value;
        }
        else {
            return 'Noone present in queue!!'
        }
    }

    enqueue(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            return;
        }
        this.first = this.first.next;
        if(!this.first){
            this.last = null;
        }
        this.length--;
    }

    isEmpty(){
        return this.length === 0;
    }
    //isEmpty
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue('Arunansh');
myQueue.enqueue('Kushagra');
myQueue.dequeue();

console.log(myQueue.peek());

//Joy
//Matt
//Pavel
//Samir