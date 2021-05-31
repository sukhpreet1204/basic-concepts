/* 

The bind() method creates a new function, when invoked, has the this set to a provided value. 

The bind() method allows an object to borrow a method from another object without making a 
copy of that method. This is known as function borrowing in JavaScript.
*/



var car = {
    brand: 'Toyota',
    regno: 'GA1234',
    displayDetails: function(){
        console.log(this.regno+" "+this.brand);
    }
};

//car.displayDetails();

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();


//If we want to pass arguments in the displayDetails()

var newcar = {
    brand: 'Toyota',
    regno: 'GA1234',
    displayDetails: function(owner){
        console.log(owner+ " " + this.regno+" "+this.brand);
    }
};

var newCarDetails = newcar.displayDetails.bind(newcar, 'Vivian');
newCarDetails();