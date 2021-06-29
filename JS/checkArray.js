/*
check if an object is an array or not
*/
var arrayList = [1 , 2, 3];

if(Object.prototype.toString.call(arrayList) === '[object Array]'){
    console.log("Array!!")
}