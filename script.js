// Assignment Code
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "=", "/", "?","."];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordCharacters = []

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  console.log(confirmLength);
  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      return;
      } 

      // Confirm how many characters the user's password will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      if(!confirmUpperCase && !confirmLowerCase && !confirmSpecialCharacter && !confirmNumericCharacter) {
        alert("Please make at least one choice to make a password.")
      }

      // Assign an action to the password parameters
      
      
    if (confirmSpecialCharacter) {
     for (let i = 0; i < specialChar.length; i++) {
      const element = specialChar[i];
      passwordCharacters[passwordCharacters.length] = element
     }
    }
    
    if (confirmNumericCharacter) {
      for (let i = 0; i < number.length; i++) {
        const element = number[i];
        passwordCharacters[passwordCharacters.length] = element;
        
      }
    }
      
    if (confirmLowerCase) {
      for (let i = 0; i < alphaLower.length; i++) {
        const element = alphaLower[i];
        passwordCharacters[passwordCharacters.length] = element;
        
      }
    }

    if (confirmUpperCase) {
      for (let i = 0; i < alphaUpper.length; i++) {
        const element = alphaUpper[i];
        passwordCharacters[passwordCharacters.length] = element;
        
      }
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

