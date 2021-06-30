/* Fix the bug using ES 5 only 

var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

//output : 
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4

arr[i] will print undefined

*/

//The above can be resolved by changing var to let in ES 6.

var arr = [10, 32, 65, 2];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

//To solve this in ES 5, you need to create a function scope like here:
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function(j) {
        return function(){
            console.log('The index of this number is: ' + j)
        };
      }(i), 3000);
}