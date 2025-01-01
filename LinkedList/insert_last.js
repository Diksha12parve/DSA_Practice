class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;

function insertAtEnd(data){
    let newNode = new Node(data);

    let currentNode = head;

    while(currentNode.next != null){
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;
}

insertAtEnd(45);
insertAtEnd(46);

function printList(head){
    let currentNode = head;

    while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
printList(head);

// Time Complexity - O(n)
// Space complexity - O(1)
