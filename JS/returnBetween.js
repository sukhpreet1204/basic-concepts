/*
Given an array of numbers implement the following.
const list = [1,2,3,4,5,6,7,8]
const filteredArray = list.filter(between(3, 6)) // [4,5]
*/

const list = [1,2,3,4,5,6,7,8]
const filteredArray = list.filter(between(3, 6))
function between(start, end) {
    return function(value){
        if(value>start && value<end)
            return value
    }
}
console.log(filteredArray);
