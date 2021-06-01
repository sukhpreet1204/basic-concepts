//Compose and Pipe are among the most powerful concepts in functional programming in JavaScript.

/* In this implementation, compose() takes rest parameters (any number of parameters — 
in this example, any number of functions) and returns a function that 
takes the initial value x. It then uses the reduceRight() method to iterate from right to left 
over each function fn in functionsand apply it, in turn, to the accumulated value acc.
*/


const compose = (...functions) => x => functions.reduceRight((acc,fn) => fn(acc), x);

const user = {name: 'Gianmarco', password: 1234}
const getUserName = (user) => user.name
const upperCase = (string) => string.toUpperCase()
const firstFour= (string) => string.substring(0,4)
console.log(compose (firstFour, upperCase, getUserName) (user));

//Pipe is exactly like compose(), but it works left to right.

const pipe = (...functions) => x => functions.reduce((acc, fn) => fn(acc), x);
const user2 = {name: 'Gianmarco', password: 1234}
const getUserName2 = (user2) => user2.name
const upperCase2 = (string) => string.toUpperCase()
const firstFour2= (string) => string.substring(0,4)
console.log(pipe (getUserName2, upperCase2, firstFour2) (user2));
