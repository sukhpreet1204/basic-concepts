/*

Implement Array.prototype.reduce

The reduce() method executes a reducer function (that you provide) on each element of the array, 
resulting in a single output value.
*/

function reduce(arr, reduceCallback, initialValue){
    if(!Array.isArray(arr) || !arr.length || typeof reduceCallback!=='function'){
        return[];
    }
    else{
        let hasInitialValue = initialValue!==undefined;
        let value = hasInitialValue ? initialValue : arr[0];

        for(let i=hasInitialValue ? 0 : 1; i<arr.length; i++){
            //for every iteration we assign the result of the reduceCallback to the variable value.
            value = reduceCallback(value, arr[i], i, arr);
        }
        return value;
    }
}