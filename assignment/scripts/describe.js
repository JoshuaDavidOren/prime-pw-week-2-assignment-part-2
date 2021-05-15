// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A string variable is made called name and its value is set to Dane.
// Then we check if name is "true, exact match only", to Mary
// Name is not a true, exact so we DO NOT console.log Hi, Mary!
// since its not a true exact the console.log will be "How do you do?""

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// The variable secret is created without a value.
// The numarical variable is created with the value of 123.
// Then we check if code is "true, an exact match only" to 123. the value of code is a 'true exact', and two things happen; the variable secret is now assiagned astring value of super, and the variable code is multiplied by 2.
// Then we check if the variable code is greater then 250. code is NOT greater then 250. So we disregard the changes to the variable secret.
// console.log('super');

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// the variables isStudent is set to the boolane true, the variable age is set to 34 the variable zip is set to 55407.
// then we check, if isStudent is an 'exact true' to true (IS EXACT TRUE) and "if both sides are true" we check if the variable zip is greater than 80000 (IS NOT GREATER THAN)
// then we check if isStudent is an 'exact true' to false (IS NOT EXACT TRUE) or "either side can be true" we check if age is less than 30, (IS NOT LESS THAN)
// then we check if isStudent is an 'exact true'to true (IS EXACT TRUE)
// Comsole.log('Welcome to Prime!')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne and colorTwo are oposite then in the instructions
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// only colorOne is set to purple both colorOne and colorTwo should be set to purple
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// this is a constant not a variable
const time = 4;
This is should be an and && statment not an or || statment
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// this is a constant not a variable
const minAge = 21;

// this is backwards then how it was worded (age >= minage)
if(minAge <= age) {
// console.log should read 'enter'
  console.log('no entry');
// console.log should rean 'no entry'
} else {
  console.log('enter');
}
*/
