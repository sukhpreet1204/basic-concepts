/*
Currying is a process in functional programming. 
It is a technique of transforming function with multiple arguments 
into a sequence of functions, each with a single argument.
*/

// Currying with bind function

function multiply(x,y){
    //console.log(x*y);
    return (x*y);
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));

const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(6));


//Currying with Closures

let multiplyy = function(x){
    return function(y){
        return x*y;
    }
}

console.log(multiplyy(4)(5));
