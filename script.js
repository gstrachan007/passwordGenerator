// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password");


// Write password to the #password input
function generatePassword() {
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
   var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
 document.getElementById("password").value = password;
 
}

//Prompt user to choose own or generated password
var userChoice = window.alert("Create a strong password or generate a strong selection!");
var userChoice = window.alert("your password should contain upper and lower case letters?");
var userChoice = window.alert("your password should contain numbers?");

// when Generate Password is clicked, prompt user to choose a password length of at least 8 characters and no more than 128 characters.
var userChoice = window.alert("password length must be at least 8 characters, using numbers, letters, and any of these characters !@#$%^&*()");


//function to copy password to clipboard
function copyPassword() {
 document.querySelector("textarea").select();
 document.execCommand("Copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", copyPassword)







