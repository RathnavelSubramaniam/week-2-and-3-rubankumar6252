/*Instructions
 - Greet your friend by printing a message to the console.
*/
var myFriend="arun"
///////////////
function greetings()
 {
      return myFriend;
      ///////////////
      
    
 }
    //leave this line unchanged to console log the results
    console.log('results: ', greetings());
    //dont change this line
    if (typeof module !== 'undefined') 
    {
      module.exports = greetings;
    }