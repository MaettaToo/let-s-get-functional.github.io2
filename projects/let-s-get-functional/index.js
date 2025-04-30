// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */ 

var maleCount = function(array) {
 //I: function takes in array of customer objects
 //O: returns number of males in the array
 //C: none
 //E: none
 // using arrow notation return the length of of the array created by filter function to see how many males are in the list
 return  _.filter(array, (customer) => customer.gender === 'male').length;
};

var femaleCount = (array) => {
//I: array of objects with customers 
//O: return number of female customers 
//C: use reduce 
//E: none
let sum = _.reduce(array, (acc, customer) =>{
  if (customer.gender === 'female'){
        acc += 1
  }
  return acc
}, 0) 
return sum;
};



var oldestCustomer = (array, letter) => {
}
    
        

var youngestCustomer;

var averageBalance;

var firstLetterCount = (array, string) => {
//I: function takes an array of customers, string repped as a letter 
//O: return a number that shows how many customer's names begin with the input letter
//C:none 
//E: should make case insensitive
//if I use filter, I can use the the lenght property to return the number
// filter callback, probaly char at, name key string so the question is how to access the the last name break string into array
// the second index of 
//use filter to access the array and compare first index of customer name  to string 
 let findMatch = _.filter(array, (customer) => {
  //return comparison stmt 
  return customer.name[0].toUpperCase() === string || customer.name[0].toLowerCase() === string; 
}).length;
//return results of filtering 
return findMatch; 
  
}



var friendFirstLetterCount = (array, customer, letter) => {
  //I: function takes 3 params, array of objects, customer string representing the customer name item string repped as letter
  //O:  return a number that tells the number of friends whose name start with the input letter
  //C: none
  //E: none 
// use filter to iterate over the array
let findFriendMatch = _.filter(array, (cust) => {
  
  //return comparison stmt 
  if( customer === cust.name) {
    
   for(let i = 0; i < cust.friends.length; i++){
    if(cust.friends[i].name[0].toUpperCase() === letter || cust.friends[i].name[0].toLowerCase() === letter){
         return true
   }
  }
  
  } 
  
}
  });
  

//return results of filtering 
return findFriendMatch.length;
};


var friendsCount;

var topThreeTags;

var genderCount;





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
