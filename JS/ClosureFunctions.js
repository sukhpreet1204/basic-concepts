/* 
A closure is an inner function that has access to the variables in the 
outer (enclosing) function’s scope chain. 
The closure has access to variables in three scopes; specifically: 
(1) variable in its own scope, 
(2) variables in the enclosing function’s scope, and 
(3) global variables.
*/

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +       //123
        "innerArg = " + innerArg + "\n" +       //456
        "outerVar = " + outerVar + "\n" +       //a
        "innerVar = " + innerVar + "\n" +       //b
        "globalVar = " + globalVar);            //xyz
    
    })(456);
})(123);