//Assignment code here

//define the variables
var confirmLength = "";
var confirmUpperCase = "";
var confirmLowerCase = "";
var confirmNumbers = "";
var confirmSpecialCharacters = "";

var characterOptions = [];
var randomPassword = "";

//Create an array of the character options
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nubmers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "!", "$", "%", "^", "&", "*", "?", "`", "~", "-", "_", "=", "+"];



alert("Welcome! Click on the 'Generate Password' button to start! ");

//main function
function generatePassword() {
  
  //Ask the user the length of password they would like
  var confirmLength = prompt("How many characters would you like in your password? Min: 8 Characters, Max: 128 Characters");

   //if password is not between 8 and 128, ask user to try again
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Your password must be between 8 and 128 characters. Click 'Generate Password' to start over.");
    return;

  } else if (isNaN(confirmLength)){
    alert("Your password must be between 8 and 128 characters. Click 'Generate Password' to start over.");
    return;
  }

  //Ask the user questions about the other character options

  //uppercase
  var confirmUpperCase = confirm("Would you like upper case letters in your password? Click Ok for yes or Cancel for no.");
  if (confirmUpperCase) {
    characterOptions = characterOptions.concat(upperCaseLetters);
    alert("You chose to add uppercase letters to your password");
  } else {
    alert("You decided to skip uppercase letters");
  }

  //lowercase
  var confirmLowerCase = confirm("Would you like lower case letters in your password? Click Ok for yes or Cancel for no.");
  if (confirmLowerCase) {
    characterOptions = characterOptions.concat(lowerCaseLetters);
    alert("You chose to add lowercase letters to your password");
  } else {
    alert("You decided to skip lowercase letters");
  }

  //numbers
  var confirmNumbers = confirm("Would you like numbers in your password? Click Ok for yes or Cancel for no.");
  if (confirmNumbers) {
    characterOptions = characterOptions.concat(nubmers);
    alert("You chose to add numbers to your password");
  } else {
    alert("You decided to skip numbers");
  }

  //special characters
  var confirmSpecialCharacters = confirm("Would you like special characters in your password? Click Ok for yes or Cancel for no.");
  if (confirmSpecialCharacters) {
    characterOptions = characterOptions.concat(specialCharacters);
    alert("You chose to add special characters to your password");
  } else {
    alert("You decided to skip special characters");
  }
  //create a while loop if the user hasn't picked any of the password character options
  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
    alert("Your password must contain at least one of the criteria options: uppercase letters, lowercase letter, numbers, or special characters.  Please start over.")
    
    //ask the same prompt questions again

    //uppercase
    var confirmUpperCase = confirm("Would you like upper case letters in your password? Click Ok for yes or Cancel for no.");
    if (confirmUpperCase) {
      characterOptions = characterOptions.concat(upperCaseLetters);
      alert("You chose to add uppercase letters to your password");
    } else {
      alert("You decided to skip uppercase letters");
    } 

    //lowercase
    var confirmLowerCase = confirm("Would you like lower case letters in your password? Click Ok for yes or Cancel for no.");
    if (confirmLowerCase) {
      characterOptions = characterOptions.concat(lowerCaseLetters);
      alert("You chose to add lowercase letters to your password");
    } else {
      alert("You decided to skip lowercase letters");
    }

    //numbers
    var confirmNumbers = confirm("Would you like numbers in your password? Click Ok for yes or Cancel for no.");
    if (confirmNumbers) {
      characterOptions = characterOptions.concat(nubmers);
      alert("You chose to add numbers to your password");
    } else {
      alert("You decided to skip numbers");
    }

    //special characters
    var confirmSpecialCharacters = confirm("Would you like special characters in your password? Click Ok for yes or Cancel for no.");
    if (confirmSpecialCharacters) {
      characterOptions = characterOptions.concat(specialCharacters);
      alert("You chose to add special characters to your password");
    } else {
      alert("You decided to skip special characters");

    } 
  } 
  //generate random password
  var generatePassword =(characterOptions);
  

  for (var i = 0; i < confirmLength; i++){
    randomPassword += generatePassword[Math.floor(Math.random() * generatePassword.length)];
      
    console.log(randomPassword);  
  }
  return randomPassword;  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 






