// Throttling is a technique in which, no matter how many times the user fires the event, 
// the attached function will be executed only once in a given time interval.

/* Implement Throttling function

Difference between throttling and debounce is that throttling executes the function at regular intervals while
debouncing executes the function only after some cooling period.
*/

const throttle = function(fn, interval){
    let timer;
    let allowEvents = true;

    if(allowEvents){
        let context = this;
        let arg = arguments;

        fn.apply(context, arg);
        allowEvents = false;

        timer = setTimeout(() => {
            allowEvents = true;
        }, interval);
    }
}