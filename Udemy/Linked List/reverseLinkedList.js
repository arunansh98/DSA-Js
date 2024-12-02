class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// todo
function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

let head = new ListNode(1);
let ptr = head;
for (let i = 1; i < 10; i++) {
  ptr.next = new ListNode(i + 1);
  ptr = ptr.next;
}

// before reversing
console.log("before reversing the linked list");
print(head);

//reversing the linked list
console.log("reversing the linked list");
head = reverseLinkedList(head);

// after reversing
console.log("after reversing the linked list");
print(head);
console.log({ head });

// function to print linked list
function print(head) {
  let ptr = head;
  while (ptr) {
    console.log({ ptr });
    ptr = ptr.next;
  }
  console.log("print() works!");
}
