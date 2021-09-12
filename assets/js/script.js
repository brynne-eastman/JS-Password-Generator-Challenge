//define the variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#pasword");


//Create an array of the character choices
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nubmers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "!", "$", "%", "^", "&", "*", "?", "`", "~", "-", "_", "=", "+"];

var passwordLength = "";
var confirmUpperCase = "";
var confirmLowerCase = "";
var confirmNumbers = "";
var confirmSpecialCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
alert("Welcome! Click on the 'Generate Password' button to start! ");

function generatePassword() {
  var characterOptions = "";
  var randomPassword = "";

  //Ask the user the length of password they would like
  var passwordLength = prompt("How many characters would you like in your password? Min: 8 Characters, Max: 128 Characters");

   //if password is not between 8 and 128, ask user to try again
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters. Click 'Generate Password' to start over.");
    return;

  } else if (isNaN(passwordLength)){
    alert("Your password must be between 8 and 128 characters. Click 'Generate Password' to start over.");
    return;
  }
  //Ask the user questions about the other character options
  var confirmUpperCase = confirm("Would you like upper case letters in your password? Click Ok for yes or Cancel for no.");

  var confirmLowerCase = confirm("Would you like lower case letters in your password? Click Ok for yes or Cancel for no.");
  
  var confirmNumbers = confirm("Would you like numbers in your password? Click Ok for yes or Cancel for no.");
  
  var confirmSpecialCharacters = confirm("Would you like special characters in your password? Click Ok for yes or Cancel for no.");

  if (confirmUpperCase) {
    randomPassword.push(confirmUpperCase);
  }
  
  if (confirmLowerCase) {
    randomPassword.push(confirmLowerCase);
  }

  if (confirmNumbers) {
    randomPassword.push(confirmNumbers);
  }

  if (confirmSpecialCharacters) {
    randomPassword.push(confirmSpecialCharacters);
  }
    
  else if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters) {
    alert("Your password must contain at least one character type: lowercase letters, uppercase letters, numbers, or special characters. Click 'Generate Password' to start over.");
    return;
  }

  for (var i = 0; i < passwordLength; i++){
    randomPassword +=  characterOptions.charAt(Math.floor(Math.random() * characterOptions.length));
    

  }
  return randomPassword;
  
};

  










