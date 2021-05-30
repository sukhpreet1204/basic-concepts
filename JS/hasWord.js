/*
Your input is an array containing unsorted words. 
Suggest an efficient solution for implementing hasWord(word) which receives a word and 
returns true if it is in the array and false otherwise. 
You are not allowed to use JS Objects (maps) in your solution but can use Arrays. 
Solution time complexity is more important then it’s space complexity.
*/

class Dictionary {
    constructor(arr) {
      this.dict = [];
      arr.forEach((word)=>{
        const code = this.encode(word);
        this.dict[code] = 1;
      });
    }
    encode(word) {
      return word.split('').map(char=>char.charCodeAt(0)).join('000');
    }
    hasWord(word) {
      const code = this.encode(word);
      return !!this.dict[code];
    }
  }

  const obj = new Dictionary(['pqrs', 'mnop', 'abcd', 'xyz']);
  console.log(obj.hasWord('abcd'));
