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

  //Prompt user for character types to be included
  //characterTypes: an array to store which characters the user wishes to include in their password. by default, all are enabled
  var characterTypes = [true,true,true,true];
  var characterChoices = ["lowercase","uppercase","numeric","special characters"];
  var characterFlag = true;
  // Input validation loop
  while (characterFlag) {
    alert("The following prompts will ask which types of characters you want in your password. Click OK to include, click Cancel to exclude. At least 1 type of character must be selected.");
    for (var i=0; i<characterChoices.length; i++) {
      characterTypes[i] = confirm("Would you like " + characterChoices[i] + " characters included in your password?");
      if (characterTypes[i] == true) {
        characterFlag = false;
      }
    }
    if (characterFlag) {
      alert("Invalid entry. No character types were selected.");
    }
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
