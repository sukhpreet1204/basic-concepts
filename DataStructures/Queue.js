/*
Element is inserted (ENQUEUE) to the end of the Queue (tail).
Element is deleted/removed (DEQUEUE) from the beginning of the Queue (head).
FIFO
*/

function Queue(){
    var storage={};
    var head = 0;
    var tail = 0;

    return{
        enQueue: function(item){
            storage[tail] = item;
            tail++;
        },

        deQueue: function(){
            var size = tail-head;
            if(size <=0) return undefined;

            var item = storage[head];
            delete storage[head];
            head++;

            //Reset the counter
            if(head === tail){
                head = 0;
                tail = 0;
            }
            return item;
        },
        size: function(){
			return tail - head;
		},
        peek: function(){
			return storage[tail - 1];
		},
        print: function(){
			var result = [];

			for (var key in storage){
				result.push(storage[key]);
			}

			return result;
		}
    }
}

/*
Complexity
As you can see, accessing Object’s property takes O(1) time, 
hence EnQueue() and DeQueue() each will takes O(1) constant running time.

EnQueue(item) — add new element item to queue at the tail.
DeQueue() — remove oldest element from the head of the queue.
*/