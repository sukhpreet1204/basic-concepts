/*
Implement Array.prototype.map

The map() method creates a new array 
with the results of calling a provided function on every element in the calling array.
*/

function map(arr, mapCallback){
    if(!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function'){
        return[];
    }
    else{
        let result = [];
        for(let i=0; i<arr.length; i++){
            // push the result of the mapCallback in the 'result' array
            result.push(mapCallback(arr[i],i,arr));
        }
        return result;
    }
}