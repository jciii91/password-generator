// Assignment code here
function generatePassword() {
  //Prompt user for desired length of password, specifying the range of values accetpable
  var passwordLength = "";
  var lengthFlag = true;
  //Input validation loop
  while (passwordLength == "" || lengthFlag) {
    passwordLength = prompt("Please enter a password length. Length must be at least 8 but no more than 128.","8");
    if (!(parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128)) {
      alert("Invalid entry. Please reread the instructions and try again.");
      continue;
    }
    lengthFlag = false;
  }

  
}

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
