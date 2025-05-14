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
   
  //iterate over the array using reduce 
  const sum = _.reduce(array, (acc, curr) => {
    // use regex to remove commas and dollar signs
    let newBalance = Number(curr.balance.replace(/[$,]/g,''));
    
    //add all of the balances together,
    acc += newBalance;
   // restart iteration over again
     return acc;

  },0);
  //return results of reduce function divided over array.length to get the average
  return sum / array.length;
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

//create output array
 let output = [];
 // for loop to iterate over array of objects
 for(let i = 0; i < array.length; i++){
 //use conditional statement to determine if customer(input string) strictly equals  array{i].customerName  if  true  
  if (customer === array[i].name){
    //use loop to iterate over the friends array
    for( let j = 0; j < array[i].friends.length; j++){
      // conditional statement to determine if the lowercase or uppercase character at friends[i][0] is strictly equal to letter(input string)
      if (array[i].friends[j].name[0].toUpperCase() === letter || array[i].friends[j].name[0].toLowerCase() === letter){
       // if true push name to the output array
        output.push( array[i].friends[j].name)
      }
    }
 }

 }
 // return the length of the output array 
 return output.length;
//const nameMatch = _.filter(array, (curr1) =>{ 
   //if(curr1.name === customer){
    //return true
  // }
//})
//console.log(nameMatch);


 //const friendly =  _.filter(array, (curr) =>{
  // test to see if input name appears in friends array, 
  //for loop to iterate over friends array
    //for (let i = 0; i < curr.friends.length; i++){
      //conditional stmt to determine the if name is in the friends array
    //if(curr.friends[i].name === name && name !== curr.name){
      //return true if test is passed
      //return true;
   //}
    //}
  //});
};



var friendsCount = (array, name) => {

//I: function takes an array of objects and a string repped as name 
 //O: return an array containing customer's name that has the input string in their friends list 
 //C: none 
 //E: none 
 // use filter, then iterate over the friends array to see if the input name exists 
 const filtrex =  _.filter(array, (curr) =>{
  // test to see if input name appears in friends array, 
  //for loop to iterate over friends array
    for (let i = 0; i < curr.friends.length; i++){
      //conditional stmt to determine the if name is in the friends array
    if(curr.friends[i].name === name && name !== curr.name){
      //return true if test is passed
      return true;
   }
    }
  });
  
// reduce through the results of the filter array to abstract the names 
  const results = _.reduce(filtrex, (acc, curr2) => {
    // push name to acc empty array
    acc.push(curr2.name)
    //return acc to restart the process
    return acc;

  }, []); 
  // return the results of using reduce to build the array;
return results;
};





var topThreeTags = (array) => {
  //I: function takes an array as input 
//O: return an array of strings with the three most common tags among all customers' associated tags
//C: none
//E: none 
// the whole idea is to collect the values that occur multiple times into one array and then determine how many times they occur. 

//if(acc.tags includes )
// use reduce to create comparison to see if elements from acc.tags appear in curr.tags
  const testy =  _.reduce(array, (acc, curr) => {
    // init for loop to iterate over curr tags array
     for(let i = 0; i < curr.tags.length; i++){
      //conditional stmt to test if acc has key
      if (!acc.hasOwnProperty(curr.tags[i])){
      // add the key  to the object
        acc[curr.tags[i]] = 1;
        // if property exist count the value 
      } else if(acc.hasOwnProperty(curr.tags[i])){
        acc[curr.tags[i]] += 1; 
      }
     }
      // return acc
    return acc;
}, {});
//
let results = Object.entries(testy);

const ascend = results.sort(function (a, b){
  return b[1] - a[1];
})

const finalResults = []
finalResults.push(ascend[0][0], ascend[1][0], ascend[2][0]);
 return finalResults;

};


    
    


   
  

var genderCount = (array) => {
//I: function takes an array of objects as params
//O: return an object with the count of the genders value and the gender as the key
//C: must use reduce
//E: none
//use filter to find binary, 
var nonBinary = (array) => {
  // using arrow notation return the length of of the array created by filter function to see how many non-binary people are in the list
  return  _.filter(array,(customer) => customer.gender === 'non-binary').length;
 };
 //use maleCount and and femaleCount within reduce function to return the object 
 const genderInfo = _.reduce(array,(acc, curr) =>{
          acc.male = maleCount(array);
          acc.female = femaleCount(array);
          acc['non-binary'] = nonBinary(array);
        // return acc to start process over 
        return acc;
 }, {})
 //return results of adding object
 return genderInfo;
 


};





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
