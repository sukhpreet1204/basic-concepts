/*
We use promises for handling asynchronous interactions in a sequential manner. 
They are especially useful when we need to do an async operation and THEN do another 
async operation based on the results of the first one.

 The promise represents the future value. 
 It has an internal state (pending, fulfilled and rejected) 

 You can chain then() blocks, thus avoiding the callback hell. 
 You can handle errors in the catch() block. 
 After a promise is set to fulfilled or rejected state, it becomes immutable.
*/

class CustomPromise{
    state="PENDING";
    value=undefined;
    thenCallbacks = [];
    errorCallbacks = [];

    constructor(action){
        action(this.resolver.bind(this), this.reject.bind(this));
    }

    resolver(value){
        this.state="RESOLVED";
        this.value=value;
        this.thenCallbacks.forEach(callback => {
            callback(this.value);
        })
    }

    reject(value){
        this.state="REJECTED";
        this.value=value;
        this.errorCallbacks.forEach(callback => {
            callback(this.value);
        })
    }

    then(callback){
        this.thenCallbacks.push(callback);
        return this;
    }

    catch(callback){
        this.errorCallbacks.push(callback);
        return this;
    }
}

let promise = new CustomPromise((resolver, reject) => {
    setTimeout(() => {
        const rand = Math.ceil(Math.random(1 * 1 + 6) * 6);
        if (rand > 2) {
            resolver("Success")
          } else {
            reject("Error")
          }
    },1000);
})

promise
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.log(error)
  })