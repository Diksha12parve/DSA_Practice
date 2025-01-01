class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
let firstNode = new Node(89);
let secondNode = new Node(67);
let thirdNode = new Node(78);
let forthNode = new Node(34);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = forthNode;

function searchLinkedList(head, key){
      let current = head;

      while(current!=null){
        if(current.data == key)
            return true;
        current = current.next;
      }

      return false;
}

const result = searchLinkedList(head, 80);

result == true ? console.log("Key found in linked list") : console.log("Key not found");

// time complexity - O(n)
// space complexity - O(1)