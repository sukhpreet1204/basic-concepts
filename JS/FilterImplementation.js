/*

Implement Array.prototype.filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

function filter(arr, filterCallback){
    if(!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function'){
        return [];
    }
    else{
        let result = [];
        for(let i=0; i<arr.length; i++){
            // check if the return value of the filterCallback is true or "truthy"
            if(filterCallback(arr[i],i,arr)){
                // push the current item in the 'result' array if the condition is true
                result.push(arr[i]);
            }
        }
        return result;
    }
}
