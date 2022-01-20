// Assignment code here
var passwordLength = "";
var characterTypes = [true,true,true,true];
var characterChoices = ["lowercase","uppercase","numeric","special characters"];
var specialString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() {
  //call function to get length of password
  getLength();

  //call function to select character types
  whichCharacters();
  
  //return the string to print
  return makeString();
}

function randomNumber(min,max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function getLength() {
  //Prompt user for desired length of password, specifying the range of values accetpable
  passwordLength = prompt("Please enter a password length. Length must be at least 8 but no more than 128.","8");
  if (!(parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128)) {
    alert("Invalid entry. Please reread the instructions and try again.");
    //calls itself again if an invalid length is entered
    getLength();
  }
}

function whichCharacters() {
  //Prompt user for character types to be included
  alert("The following prompts will ask which types of characters you want in your password. Click OK to include, click Cancel to exclude. At least 1 type of character must be selected.");
  for (var i=0; i<characterChoices.length; i++) {
    characterTypes[i] = confirm("Would you like " + characterChoices[i] + " characters included in your password?");
  }
  var checkTypes = true;
  for (var i=0; i<characterTypes.length; i++) {
    if (characterTypes[i] == true) {
      checkTypes = false;
    }
  }
  if (checkTypes) {
    whichCharacters();
  }
}

function makeString() {
  var passwordString = "";
  for (var j=0; j<passwordLength; j++) {
    var criteriaNum = -999;
    while (criteriaNum < 0) {
      criteriaNum = randomNumber(0,3);
      console.log(criteriaNum);
      if (!characterTypes[criteriaNum]) {
        criteriaNum = -999;
      }
    }
    switch (criteriaNum) {
      //lowercase
      case 0:
        passwordString += String.fromCharCode(randomNumber(97,122));
        break;
      //uppercase
      case 1:
        passwordString += String.fromCharCode(randomNumber(65,90));
        break;
      //numeric
      case 2:
        passwordString += String.fromCharCode(randomNumber(48,57));
        break;
      //special
      case 3:
        passwordString += specialString[randomNumber(0,specialString.length - 1)];
        console.log("here");
        break;
      default:
        console.log("Something went wrong.");
    }
  }
  return passwordString;
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
