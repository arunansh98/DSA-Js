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
     
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value > currentNode.value){
                currentNode = currentNode.right;
            }
            else if(value < currentNode.value){
                currentNode = currentNode.left;
            }
            else {
                return currentNode;
            }
        }
        return false;
    }

    remove(value){
        if(this.root === null){
            return null;
        }
        let parentNode = null;
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){ //go left
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value){ //go right
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else {
                    if(currentNode.left && currentNode.right){ // if the node to be deleted has both left and right nodes
                        if(parentNode === null){ // if the node to be deleted is the root node
                            this.root = currentNode.right;
                            let currentLeft = this.root.left;
                            this.root.left = currentNode.left;
                            let left = this.root.left;
                            while(left.right!==null){
                                left = left.right;
                            }
                            left.right = currentLeft;
                            return value;
                        }
                        if(parentNode.left === currentNode){ // if the node to be deleted is the left node of the parent node
                            parentNode.left = currentNode.right;
                            let currentRight = currentNode.right;
                            let currentLeft = currentNode.left;
                            while(currentRight.left!==null){
                                currentRight = currentRight.left;
                            }
                            currentRight.left = currentLeft;
                            return value;
                        }
                        if(parentNode.right === currentNode){ // if the node to be deleted is the right node of the parent node
                            parentNode.right = currentNode.right;
                            let currentRight = currentNode.right;
                            let currentLeft = currentNode.left;
                            while(currentRight.left!==null){
                                currentRight = currentRight.left;
                            }
                            currentRight.left = currentLeft;
                            return value;
                        }
                    }
                    else if(currentNode.left){ // if the node to be deleted has only a left node
                        if(parentNode === null){ // if the node to be deleted is the root node
                            this.root = currentNode.left;
                            return value;
                        }
                        if(parentNode.left === currentNode){ // if the node to be deleted is the left node of the parent node
                            parentNode.left = currentNode.left;
                            return value;
                        }
                        if(parentNode.right === currentNode){ // if the node to be deleted is the right node of the parent node
                            parentNode.right = currentNode.left;
                            return value;
                        }
                    }
                    else if(currentNode.right){
                        if(parentNode === null){ // if the node to be deleted is the root node
                            this.root = currentNode.right;
                            return value;
                        }
                        if(parentNode.left === currentNode){ // if the node to be deleted is the left node of the parent node
                            parentNode.left = currentNode.right;
                            return value;
                        }
                        if(parentNode.right === currentNode){ // if the node to be deleted is the right node of the parent node
                            parentNode.right = currentNode.right;
                            return value;
                        }
                    }
                    else {
                        if(parentNode === null){ // if the node to be deleted is the root node
                            this.root = null;
                            return value;
                        }
                        if(parentNode.left === currentNode){ // if the node to be deleted is the left node of the parent node
                            parentNode.left = null;
                            return value;
                        }
                        if(parentNode.right === currentNode){ // if the node to be deleted is the right node of the parent node
                            parentNode.right = null;
                            return value;
                        }
                    }
            }
        }
        return null;
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
tree.remove(170);
tree.remove(15);
tree.remove(6);
tree.remove(1);
tree.remove(4);
tree.remove(20);
// tree.remove(9);


// console.log(tree.lookup(171));
console.log(JSON.stringify(traverse(tree.root)));
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