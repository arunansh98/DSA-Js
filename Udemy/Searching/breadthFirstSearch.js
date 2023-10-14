class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node;
        } 
        else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else { 
                    //Right
                    if(!currentNode.right){
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){}

    remove(value){}

    breadthFirstSearch(){ 
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(queue,list){ 
        if(!queue.length){
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue,list);
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//        9
//    4      20
//  1   6  15   170 

function traverse(node){
    if(node === null){
        return null;
    }
    const tree = {value:node?.value};
    tree.left = node?.left === null ? null : traverse(node?.left);
    tree.right = node?.right === null ? null : traverse(node?.right);
    return tree;
}

// console.log(tree);
// console.log(JSON.stringify(traverse(tree.root)));

// console.log(traverse(tree));

// console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root],[]));



