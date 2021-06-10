let arr = [2,2,4,1,5,5,7,6,9,2,2,5];

function removeDuplicate(arr){
//     var wordCount={};
//     var outputArr=[];
//     arr.forEach(element => {
//         wordCount[element] = ++wordCount[element] || 1;
//     });
//     Object.keys(wordCount).forEach(element => {
        
//             outputArr.push(element);
        
//     })
//     return outputArr;
    const set1 = new Set(arr);
    return set1;
 }

console.log(removeDuplicate(arr));