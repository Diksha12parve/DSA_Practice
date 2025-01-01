class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
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
thirdNode.next = head; 

  function circular_linkedList(head){
     let currentNode = head;

     while(currentNode != null){
        console.log(currentNode.data);
            currentNode = currentNode.next;
     }
  }

  circular_linkedList(head);
  