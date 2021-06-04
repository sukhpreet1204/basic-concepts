function Stack(){
    var stack = {};
    var stackSize = 0;

    return {
        push: function(item){
            stack[stackSize] = item;
            stackSize++;
        },
        pop: function(){
            if(this.isEmpty()) return undefined;

            stackSize--;
            var item = stack[stackSize];
            delete stack[stackSize];

            return item;
        },
        peek: function(){
            if(this.isEmpty()) return undefined;

            return stack[stackSize-1];
        },
        stackEmpty: function(){
            while(!this.isEmpty()){
                this.pop();
            }
        },
        size: function(){
            return stackSize;
        },
        print: function(){
            var result = [];
          
            for (var key in stack){
            result.unshift(stack[key]);
          }
          
          return result;
        }
    }
}

/*
Complexity
Push(item) — O(1) running time
Pop() — O(1) running time.
Peek() — O(1) running time.
StackEmpty () — O(n) running time with n is the size of the stack
*/