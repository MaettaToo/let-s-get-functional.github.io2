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

var femaleCount;

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount = (array, string) => {
//I: function takes an array of customers, string repped as a letter 
//O: return a number that showshow many customer's names begin with the input letter
//C:none 
//E: should make case insensitive
//if I use filter, I can use the the lenght property to return the number
// filter callback, probaly char at, name key string so the question is how to access the the last name break string into array
// the second index of 
console.log(array.name.split());
};

var friendFirstLetterCount;

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
