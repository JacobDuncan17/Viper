// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var specialc = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
// Ask questions to decide whats included in the password
function questions(){
  var length = (function ask() {
    var characters1 = prompt('Number from 8 to 128:');
    return isNaN(characters1) || +characters1 > 128 || +characters1 < 8 ? ask() : characters1;
  }());

  var specialc1 = window.confirm("Would you like to include special characters?")
  var numerical1 = window.confirm("Would you like to include numbers?")
  var lowercase1 = window.confirm("Would you like to include lowercase letters?")
  var uppercase1 = window.confirm("Would you like to include uppercase letters?")
  while(specialc1 === false && numerical1 === false && lowercase1 === false && uppercase1 === false) {
    alert("You must choose at least one");
    var specialc1 = confirm("Click OK to confirm if you would like to include special characters");
    var numerical1 = confirm("Click OK to confirm if you would like to include numeric characters");    
    var lowercase1 = confirm("Click OK to confirm if you would like to include lowercase characters");
    var uppercase1 = confirm("Click OK to confirm if you would like to include uppercase characters");
  }
  var answers1 = [specialc1, numerical1, lowercase1, uppercase1, length];
  return answers1;
}
// Generates password based on answers to the questions
function generatePassword(answers){
  
  var password = []
  var length = answers[4];
  if (answers[0] === true) {
    password = password.concat(specialc)
  }

  if (answers[1] === true) {
    password = password.concat(numerical)
  }
    
  if (answers[2] === true) {
    password = password.concat(lower)
  }

  if (answers[3] === true) {
    password = password.concat(upper)
  }

  var generatedPassword = ""

  for (var i = 0; i < length; i++) {
    generatedPassword = generatedPassword + password[Math.floor(Math.random() * password.length)];
  }
  return generatedPassword;
}


function writePassword() {
  var answers = questions();
  var password = generatePassword(answers);
  var passwordText = document.querySelector("#password");
  
  passwordText.textContent = password
}



