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

var maleCount = (array) => {
 //I: function takes in array of customer objects
 //O: returns number of males in the array
 //C: none
 //E: none
 // using arrow notation return the length of of the array created by filter function to see how many males are in the list
 return  array.filter((customer) => customer.gender === 'male').length;
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



var oldestCustomer = (array) => {
  

//I:  function takes an array of objects 
//O: return a string with the oldest customers name 
// C: none
//E: none
// iterate over the array, use reduce do not include seed because I need to compare ages and need the acc to be my initial value 

const oldest =  _.reduce(array, (acc, curr) => {
//conditional stmt if acc.age is less than curr.age  then acc is reassigned to curr
if( acc.age < curr.age){
      acc = curr;
}
//return acc to start the process over
return acc;
});
//return name of oldest in string 
return oldest.name;
};   

var youngestCustomer = (array) => {

//I:  function takes an array of objects 
//O: return a string with the youngest customers name 
// C: none
//E: none

  const youngest =  _.reduce(array, (acc, curr) => {
    //conditional stmt if acc.age is greater than curr.age  then acc is reassigned to curr
    if( acc.age > curr.age){
          acc = curr;
    }
    //return acc to start the process over
    return acc;
    });
    //return name of youngest in string
    return youngest.name;
    };  
   



var averageBalance = (array) => {
  //I: function takes an array of objects as input 
  //O: return a number representing the average balance of the customers 
  //C:none
  //E: none
  // add all of the balances together, potential concerns balances are listed as strings so need to convert to number, divide over array.length to get the average 
  //iterate over the array using reduce need seed? probaly not becase I need to convert over to numbers
  const res = array.map(({ curr.balance }) => ({ curr.balanc = +curr.balance }));
console.log(res);
  const sum = _.reduce(array, (acc, curr) => {
     //acc += Number(curr.balance);
     console.log(parseFloat(curr.balance));
     return acc;

  },0)
};

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
  
};



var friendFirstLetterCount = (array, customer, letter) => {
  //I:function takes 3 params, array of objects, customer a string representing the customer name, letter a string as input for the comparison
  //O:return a number that tells the number of friends whose name starts with the input letter of the given customer name  
  //C: none
  //E: must be case insensitive 
// use filter to iterate over the array,
// create conditional stmt to deterrmine if customer strictly equaled the current items(object) customer name 
// filter over the new array that the first filter created 
//determine if conditional statement to determine if the lowercase or uppercase character at  friends.name array  is strictly equal to letter(input string) 
// return the length of array returned from the the most recent filter 

// return the results of invoking the filter function








//create output array
 //let output = [];
 // for loop to iterate over array of objects
 //for(let i = 0; i < array.length; i++){
 //use conditional statement to determine if customer(input string) strictly equals  array{i].customerName  if  true  
  //if (customer === array[i].name){
    //use loop to iterate over the friends array
    //for( let j = 0; j <array[i].friends.length; j++){
      // conditional statement to determine if the lowercase or uppercase character at friends[i][0] is strictly equal to letter(input string)
      //if (array[i].friends[j].name[0].toUpperCase() === letter || array[i].friends[j].name[0].toLowerCase() === letter){
       // if true push name to the output array
        //output.push( array[i].friends[j].name)
      //}
    //}
 //}

 //}
 // return the length of the output array 
 //return output.length;
}

var friendsCount;

var topThreeTags;

var genderCount;





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
