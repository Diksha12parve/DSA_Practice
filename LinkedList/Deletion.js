class Node{
    constructor(data){
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

function delete_beginning(){
  if(head == null){
    console.log("head is null");
    return;
  }

  let temp = head; 

  head = head.next;

  temp = null;
}

delete_beginning();

function printList(head){

    let currentNode = head;

    while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

printList(head);
// time complexity - O(1)
//Spce complexity - O(1)