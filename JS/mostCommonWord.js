//Given a string of words, return the most common used word in it

function mostCommonWord(inputString) {
    let mostCommonCounter = 0;
    let mostCommonWord = "";
    const wordCount = {};
    //console.log(inputString);
    inputString.split(" ").forEach(element => {
        wordCount[element] = ++wordCount[element] || 1;
    });
    console.log(wordCount);
    Object.keys(wordCount).forEach(element => {
         if(wordCount[element] > mostCommonCounter){
            mostCommonWord = element;
            mostCommonCounter = wordCount[element];
         }     
    });
    return mostCommonWord;
  }

  let res = mostCommonWord('bob plays football . bob likes icecream . bob enjoys music');
  console.log(res);