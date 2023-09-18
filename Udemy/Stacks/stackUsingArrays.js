class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.stack = [];
    }

    peek(){ 
        return this.stack[this.stack.length - 1];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        this.stack.pop();
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