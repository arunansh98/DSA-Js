class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.height = 1;
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
            let traverseArray = [];
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = node;
                        this.balanceTree(traverseArray,value);
                        return this;
                    }
                    else {
                        traverseArray.push(currentNode);
                    }
                    currentNode = currentNode.left;
                }
                else { 
                    //Right
                    if(!currentNode.right){
                        currentNode.right = node;
                        this.balanceTree(traverseArray,value);
                        return this;
                    }
                    else {
                        traverseArray.push(currentNode);
                    }
                    currentNode = currentNode.right;
                }
            }

        }
    }
    

    balanceTree(array,key){
        let i = array.length - 1;
        let bf;
        let node;
        let parent;
        while(i >= 0){
            node = array[i];
            bf = this.getHeight(node?.left) - this.getHeight(node?.right);
            // LL case
            if(bf > 1 && key < node.left.value){
                parent = array[i-1];
                this.rightRotate(node,parent);
                break;
            }
            // RR case
            if(bf < -1 && key > node.right.value){
                parent = array[i-1];
                this.leftRotate(node,parent);
                break;
            }
            // LR case
            if(bf > 1 && key > node.left.value){
                parent = array[i-1];
                this.leftRotate(node.left,node);
                this.rightRotate(node,parent);
                break;
            }
            // RL case
            if(bf < -1 && key < node.right.value){
                parent = array[i-1];
                this.rightRotate(node.right,node);
                this.leftRotate(node,parent);
                break;
            }                                    
            i--;
        }
    }

    leftRotate(root,parent){
        if(root === null){
            return root;
        }
        let y = root.right;
        let yLeft = y.left;
        y.left = root;
        root.right = yLeft;
        if(parent !== undefined){
            if(parent?.left === root){
                parent.left = y;
            }
            if(parent?.right === root){
                parent.right = y;    
            }
        }
        if(root === this.root){
            this.root = y;
        }
        return y;

    }

    rightRotate(root,parent){ 
        if(root === null){
            return root;
        }
        let x = root.left;
        let xRight = x.right;
        x.right = root;
        root.left = xRight;
        if(parent){
            if(parent?.left === root){
                parent.left = x;
            }
            if(parent?.right === root){
                parent.right = x;    
            }
        }
        if(root === this.root){
            this.root = x;
        }
        return x;

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

    getHeight(root){
        if(!root){
            return 0;
        }
        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);
        return Math.max(leftHeight,rightHeight) + 1;
    }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(9);


// console.log(tree.getHeight(tree.root.left));
// console.log(tree.getHeight(tree.root.right));

// unbalanced tree

// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
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