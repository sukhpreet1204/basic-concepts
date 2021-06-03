function Node(value){
    this.value = value;
    this.next = undefined;
}

function SLinkedList(){
    var head = undefined;
    var length = 0;


return {
    insert: function(item){
        if(!item) return;

        var node = new Node(item);      //Create new Node to wrap around the item data.
        if(head){
            node.next = head;
        }    
        head = node;
        length++;
    },
    delete: function(value){         //iterate the list until one node before the node to delete 
        var curr = head;

    if(head.value === value){       //If the head is to be deleted
        head = head.next;
        return;
    }

    while(curr){
        if(curr.next){
            var next = curr.next;
            if(next.value === value){
                curr.next = next.next;

                length--;
                break;
            }
        }

        curr = curr.next;
    }
    },
    search: function(value){
        var curr = head;
        var found = undefined;
    
        while(curr){
            if(curr.value == value){
                found = curr;
                break;
            }
            curr = curr.next;
        }
        return found;
    },
    get size() {
        return length;
      },
      print: function() {
        var result = [];
  
        var curr = head;
        while (curr) {
          result.push(curr.value);
  
          curr = curr.next;
        }
  
        return result;
      }
}
}

/*
Complexity:
Insert : O(1)
Delete : O(n)   //n is the length of the linked list
Search : O(n)
*/



