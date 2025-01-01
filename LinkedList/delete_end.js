class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let head = null;

// let head = new Node(1);
// let firstNode = new Node(2);
// let secondNode = new Node(3);
// let thirdNode = new Node(4);

// head.next = firstNode;
// firstNode.next = secondNode;
// secondNode.next = thirdNode;

function deleteEnd(){
    if(head == null){
        console.log("list is empty");
        return;
    }
    if(head.next == null){
        head = null;
        return;
    }

    let currentNode = head;
    while(currentNode.next.next != null){
        currentNode = currentNode.next;
    }
    let endNode = currentNode.next;
    currentNode.next = null;

    endNode = null;
}

deleteEnd();
deleteEnd();

function printList(head){
    let currentNode = head;

    while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
printList(head);

//Time Complexity - O(1)

//Space Complexity - O(1)
