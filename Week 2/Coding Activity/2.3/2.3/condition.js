/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;
var age= 18
// Add your code here
function isOldEnoughToVote(age) {
    if (age>=18)
    {
        return('Eligible to vote')
    }
    else
    {
        return('Not eligible to vote')
    }
    //your code goes here
  // return true or false based on the age
  
  return response;
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
// Don't edit the code below here
if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}

