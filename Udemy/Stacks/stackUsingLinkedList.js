class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){ 
        if(this.top){
            return this.top.value;
        }
        else {
            return 'No element present in stack';
        }
    }

    push(value){
        if(this.isEmpty()){
            this.bottom = new Node(value);
            this.top = this.bottom;
        }
        else {
            const second = this.top;
            this.top = new Node(value);
            this.top.next = second;
        }
        this.length++;
    }

    pop(){
        if(this.isEmpty()){
            console.log('Cannot pop since there is no element present in stack');
            return;
        }
        if(this.length === 1){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    }

    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push('New Element');
myStack.push('Discord');
myStack.pop();

console.log(myStack.peek());
// console.log(myStack);



//Discord
//Udemy
//Google