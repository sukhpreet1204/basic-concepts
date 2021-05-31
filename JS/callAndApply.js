/*
Underneath the hood, functions use call() to invoke a function.
*/

function a(){
    console.log('hi');
}
a.call();       //hi
a.apply();      //hi

/* use call and apply to borrow the methods. */

const Wizard = {
    name: 'Merlin',
    health : 50,
    heal(n1,n2){
        return this.health+=n1+n2;
    }
};

const archer = {
    name: 'Robin',
    health: 30
};

console.log(Wizard.heal(10,20));    //80

console.log(archer);

Wizard.heal.call(archer,20,30);
Wizard.heal.apply(archer, [20,30]);

console.log(archer);        

/* Apply() takes an array of arguments 
   Call() takes a comma-separated list of arguments.

   Next time you want to copy a method from another object, use call() or apply(). 
   Just ensure that the function contains this keyword because its only then that its dynamic.
*/