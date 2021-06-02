//Deepclone means to copy all the properties of an object, including the nested objects: 

var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}

function deepClone(obj){
    var newobj = {};
    for(var key in obj){
        if(typeof obj[key]==='object' && obj[key]!== null){
             newobj[key] = deepClone(obj[key]);
        }
        else{
            newobj[key] = obj[key];
        }
    }
    return newobj;
}

var newobj = deepClone(personalDetail);
console.log(newobj);

// ****************************************
const person = {name: "John",
                address : {
                    country: "USA",
                    city: "San Francisco"
                }
                };
const updated = {...person, 
    address: { 
        ...person.address,
        city: "New York"
    },
    name: "Bob"}
console.log(person);
console.log(updated);