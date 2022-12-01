// Assignment Code
var generateBtn = document.querySelector("#generate");
// Character variablesx4(Store as strings)
// Contain password length(Prompt from user)Must require validation before moving on. Must be a number)
// Array to contain different types of character sets that the user has selected


// Write password to the #password input


// Function to collect password length(Validate password length is between 8-128 AND is a number)
function getPasswordLength() {
  var passwordLength = prompt("How long would you like your password to be? ")
  while (parseInt(passwordLength) != passwordLength || passwordLength > 128 || passwordLength < 8) {
    passwordLength = prompt("You must enter a number between 8-128 for password length ")
  }
  return parseInt(passwordLength)
}
// Function to confirm which character sets to included. And adds selected character set to the available characters array(Line5) ( Numbers, letters, special characters)
// 4 confirms. if confirm is true add selected character set to array
function getCharacterTypes() {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = lower.toUpperCase();
  const numbers = "0123456789"
  const special = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"

  var charactersToInclude = ""

  // Confirm "Do you want to use lower case. If yes. Add them. If no. Do nothing"
  var confirmLower = confirm("Is the user using lower case?")
  var confirmUpper = confirm("Is this user using upper case?")
  var confirmNumbers = confirm("Is the user using numbers?")
  var confirmSpecial = confirm("Is the user using special characters?")

  if (confirmLower) {
    charactersToInclude = charactersToInclude + lower
  }

  if (confirmUpper) {
    charactersToInclude += upper
  }

  if (confirmNumbers) {
    charactersToInclude += numbers
  }

  if (confirmSpecial) {
    charactersToInclude += special
  }
}
function collectUserInput() {
  // Function that calls the Functions(Lines 7-8) Will return Password Length[Number], and the available characters[Array of Strings]

}
function returnRandomCharacter(arrayOfCharacters) {
  // Function that randomly pulls one character set from Array(Line5). Returns a randomly selected character from that character set

}
function generatePassword() {
  // Function to call on the function(Line 11) as many times as the password is long[For loop]. Adds the return value to the password variable. Once the for loop has completed. return the password variable.

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(typeof getPasswordLength())