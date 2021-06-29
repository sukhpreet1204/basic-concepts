/*Write a JavaScript program to display the reading status 
of the following books. 
*/

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   function displayStatus(library){
       return library.map(element => {
           return element.readingStatus;
       })
   }

   console.log(displayStatus(library));

   //Display only true readingStatus

   function getStatusTrue(library){
       return library.filter(element => {
           return element.readingStatus == true;
       })
   }

   console.log(getStatusTrue(library));

   //Display in the format author : title - readingStatus

   function getFormat(library){
       return library.map(element => {
           return element.author + " : "+ element.title + " - " + element.readingStatus;
       }).join(",")
   }

   console.log(getFormat(library));