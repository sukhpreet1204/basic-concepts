/* Given a string, reverse each word in the sentence

For example 

Welcome to this Javascript Guide! 
should become 
emocleW ot siht tpircsavaJ !ediuG */

var str = 'Welcome to this Javascript Guide!';

var reverseString = reverseBySeperator(str, "");

var reverseEachWord = reverseBySeperator(reverseString, " ");

function reverseBySeperator(str, seperator){
    return str.split(seperator).reverse().join(seperator);
}

console.log(reverseEachWord);