// Array containing possible characters for the password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

// Function to generate a random password
function generatePassword() {
let password = "";
for (let i = 0; i < 10; i++) { // 10 characters long password
let randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

// Function to display passwords when the button is clicked
function button() {
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

// Generate and display two passwords
password1El.textContent = generatePassword();
password2El.textContent = generatePassword();
}