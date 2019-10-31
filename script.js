//creating code that generates a random password




// DEFINE VARIABLES UP TOP

//i want to write a pop-up question box here that captures the user's answer and assigns it to the passwordLength variable. must be between 8 and 128 character. could be cool to have a loop for this somehow where if the user doens't give an answer between 8 and 128, we ask the question again 'try again' .... maybe that's achieved with an if/else?

var passwordLength = prompt("How many characters would you like your password to be (must be between 8 and 128?");
passwordLength = parseInt(passwordLength);

console.log(passwordLength);

// I'm then going to have four true/false questions for whether the user wants to include special characters, numberic characters, lowercase characters or upper case characters. these questions will resolve to variables

var specialCharacters = confirm("Would you like to include special characters?");
var numericCharacters = confirm("Would you like to include numerals?");
var lowercaseCharacters = confirm("Would you like to include lowercase characters?");
var uppercaseCharacters = confirm("Would you like to include lowercase characters?");

// DEFINE FUNCTIONS IN THE MIDDLE

// this function triggers the questions. i created this a function so that if the user gives false responses for all the queries, I can run an alert that says 'not falid' then dish this funtion again

function gatherResponses() {
   var specialCharacters = confirm("Would you like to include special characters?");
   var numericCharacters = confirm("Would you like to include numerals?");
   var lowercaseCharacters = confirm("Would you like to include lowercase characters?");
   var uppercaseCharacters = confirm("Would you like to include lowercase characters?");

};



// i'll need a function of some sort here to verify that the user selected at least one character type

function confirmSelection() {
   if (specialCharacters === false && numericCharacters === false && lowercaseCharacters === false && uppercaseCharacters === false) {
      alert("You must select at least one character type");
      gatherResponses();
   };
};


// write a function to give the password. it's going to have to be some if/then statements. those statements something is going to have to determine that we are including ... if i have 4 options that they can say yes/no to, that means I need some 


// different options a user could choose: 1(sC, nC, lC, uC); 2(sC, nC, lC); 3(sC, nC, uC); 4(sC, lC, uC); 5(sC, nC); 6(sC, lC); 7(sC, uC); 8(sC); 9(nC, lC, uC); 10(nC, lC); 11(nC, uC); 12(nC); 13(lc, uC); 14(lC); 15(uC);

// going to take the responses, and based on if it's true or false, i can use a function to add characters to an array. so, if someone says yes to specialCharacters, I want to generate an array with all of the special characters. if someone says yes to numberic characters, we create an function that gives us all the numeric, if yes to lowercase, we get a function that creates an array of all the lowercase characters, and same thing for uppercase. those arrays will be assigned to a variable. then we'll create a new variable (function?) that combines all of the arrays.... then we can create a for loop that cycles to the value of passwordLength, and each time it gives out a random character from our array. that loop stops afer running the passwordLength's amount.





// RUN FUNCTIONS AT THE END

confirmSelection();

console.log(specialCharacters);
console.log(numericCharacters);
console.log(lowercaseCharacters);
console.log(uppercaseCharacters);