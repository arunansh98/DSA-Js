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

    DFSInorder(){
        return traverseInOrder(this.root,[]);
    }

    DFSPostorder(){
        return traversePostOrder(this.root,[]);
    }

    DFSPreorder(){
        return traversePreOrder(this.root,[]);
    }
}

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right,list);
    }
    return list;
}

function traversePreOrder(node, list){
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left, list);
    }
    if(node.right){
        traversePreOrder(node.right,list);
    }
    return list;
}

function traversePostOrder(node, list){
    if(node.left){
        traversePostOrder(node.left, list);
    }
    if(node.right){
        traversePostOrder(node.right,list);
    }
    list.push(node.value);
    return list;
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
InOrder   -   [1, 4, 6, 9, 15, 20, 170]
PreOrder  -   [9, 4, 1, 6, 20, 15, 170]
PostOrder -   [1, 6, 4, 15, 170, 20, 9]

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

console.log(tree.DFSPostorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSInorder());








