// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = {lowercase_letters:"abcdefghijklmnopqrstuvwxyz", uppercase_letters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ", numeric:"0123456789", special:"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"};
 
// Ask questions to decide whats included in the password
function questions(){
  var number = (function ask() {
    var characters1 = prompt('Number from 1 to 100:');
    return isNaN(characters1) || +characters1 > 100 || +characters1 < 1 ? ask() : characters1;
  }());

  var specialc = window.confirm("Would you like to include special characters?")
  var numerical = window.confirm("Would you like to include numbers?")
  var lowercase = window.confirm("Would you like to include lowercase letters?")
  var uppercase = window.confirm("Would you like to include uppercase letters?")
  while(specialc === false && numerical === false && lowercase === false && uppercase === false) {
    alert("You must choose at least one");
    var specialc = confirm("Click OK to confirm if you would like to include special characters");
    var numerical = confirm("Click OK to confirm if you would like to include numeric characters");    
    var lowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var uppercase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }
  var answers1 = [number, specialc, numerical, lowercase, uppercase];
  return answers1;
}

function generatePassword(answers, char){
  if (answers[1] === true) {
    console.log("Password will include special characters");
  }
  else {
    delete char.special
  }

  if (answers[2] === true) {
    console.log("Password will include numbers");
  }
  else {
    delete char.numeric
  }
  if (answers[3] === true) {
    console.log("Password will include lowercase letters");
  }
  else {
    delete char.lowercase_letters
  }
  if (answers[4] === true) {
    console.log("Password will include uppercase letters");
  }
  else {
    delete char.uppercase_letters
  }
}

function writePassword() {
  
  var answers = questions();
  var password = generatePassword(answers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
