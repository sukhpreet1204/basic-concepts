/*
Sample broadcast channel
Broadcast channel is a more general API for communication.
It lets broadcast messages to all contexts sharing the same origin.
*/

//Connection to a broadcase channel
const bc = new BroadcastChannel('test_channel');

//Sending a message
bc.postMessage('This is a test message');

//A handler that only logs the event to the console
bc.onmessage = function(e){
    console.log(e);
}

//Disconnect the channel
bc.close();