class Listnode {
    constructor(data) {
        this.value = data
        this.next = null
    } // this is the list
}

class LinkedList {
    constructor(head = null) {  // if there is no head mentioned then the head is null by default
        this.head = head
    }

    size() {
        let count = 0
        let node = this.head
        while (node) {  // this condition will evenutally break on the node that is null.
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    getLast() {
        let lastNode = this.head
        if (lastNode) { // this is because head can be null.
            while (lastNode.next) { // this condition will eventually break on the node that next is null
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head
    }

    insertAtFirst(value) {
        // so to insert something at first it should be a node that next should be head and the head is that node now
        // let frontNode = new Node(value)
        // if(this.head) {
        //     frontNode.next = this.head;
        //     this.head = frontNode
        // }else {
        //     // this is the first node and one and only node in linkedlist cuz there is no head
        //     this.head = frontNode;
        //     return
        // }
        let frontNode = new Node(value);
        // Set the new node's next to the current head
        frontNode.next = this.head;
        // Update head to point to the new node
        this.head = frontNode;
    }

    insertAtEnd(value) {
        
    }
}

// and thats it here is our linked list 
// at final the class are only abstactions in javascript inside it is using only objects 
// so OOPs concept will be strong as well but not actually implemented,  
// I mean these are implemented yet not implemented.
// const list = {  // structure of a linked list in javascript
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null    
//                     }
//                 }
//             }
//         }
//     }
// };


let node1 = new Listnode(1)
let node2 = new Listnode(2)
let node3 = new Listnode(3)
let node4 = new Listnode(4)
node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList(node1) // creating list with head as node1


// now we have the linked list like  1 => 2 => null
console.log(list.head.value)
console.log(list.head.next.value)
console.log(list.head.next.next.value)
console.log(list.head.next.next.next.value)