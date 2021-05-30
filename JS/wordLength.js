//Write code to convert an array of strings to an array of the lengths of those strings.

var words = ["the", "quick", "brown", "fox"];

function wordLength(words) {
    let len = []
    const wordCount = {}
    words.map(ele => {
        len.push(ele.length);
    })
    return len;
}

let res = wordLength(words);
console.log(res);