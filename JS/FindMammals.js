/*
Given an array containing a list of animal objects, return a new array containing only the
animals which are mammals. Each animal object contains an animal name (i.e. dog or
snake) and a value, mammal, which is a boolean indicating whether the animal is a
mammal.
*/


animals = [
    {
    type: 'Dog',
    mammal: true,
    },
    {
    type: 'Snake',
    mammal: false,
    },
    {
    type: 'Cheetah',
    mammal: true,
    },
    ]

function findMammals(animals){
    let mammals = [];
    for(let i=0; i<animals.length; i++){
        if(animals[i].mammal === true){
            mammals.push(animals[i]);
        }
    }
    return mammals;
}

console.log(findMammals(animals));


//Another solution using filter:
function findOnlyMammals(animals){
    return animals.filter(animal => animal.mammal === true)
}

console.log(findOnlyMammals(animals));
