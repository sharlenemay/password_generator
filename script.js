// Assignment Code
var generateBtn = document.querySelector("#generate");

// create an array that lists out possible character combinations
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","{","|","}","~"];
var passArr = [];
var finalArr = [];

// console.log to check
/* for (var i=0; i<symbols.length; i++){
        console.log(symbols[i]);
     }
*/
    
function writePassword(){
    if (finalArr === []) {
        start();
    } else {
        finalArr = []
        start();
    }
        
        
    }
    
    function start() {
  // Decide character count for password
  var promptPassword = prompt("How many characters would you like your password to be?");
  var count = parseInt(promptPassword,10);
      
  // for (var i=0; i<=length; i++) 
  // if (promptPassword >= 8 && <=128) 
  if (count >= 8  && count <= 128){
     
      // Confirm lowercase letters, uppercase letters, numbers, and/or symbols
      // var lcConfirm = confirm("Would you like to include lowercase letters?");
      var ucConfirm = confirm("Would you like to include uppercase letters?");
      var numbersConfirm = confirm("Would you like to include number(s)?");
      var symbolsConfirm = confirm("Would you like to include special characters?");

    // all character types
      if (ucConfirm === true && numbersConfirm === true && symbolsConfirm === true){
          for(var i=0; i<count;i++){
              passArr.push(lowerCase[Math.floor(Math.random() * lowerCase.length)], numbers[Math.floor(Math.random()*numbers.length)], upperCase [Math.floor(Math.random()*upperCase.length)], symbols[Math.floor(Math.random()*symbols.length)]);
          }
          for(var i = 0; i < count; i++) {
              finalArr.push(passArr[Math.floor(Math.random() * passArr.length)]);
          }
          // console.log to check
          console.log(finalArr.join(""));

          var password = finalArr.join("");
          var passwordText = document.querySelector("#password");
          passwordText.value = password;
          
          return finalArr;

      }

    //   no uppercase
      else if (ucConfirm === false && numbersConfirm === true && symbolsConfirm === true){
        for (var i=0; i<count; i++){
            passArr.push(lowerCase[Math.floor(Math.random() * lowerCase.length)], numbers[Math.floor(Math.random() * numbers.length)], symbols[Math.floor(Math.random()*symbols.length)]);
        }
        for (var i=0; i<count; i++) {
            finalArr.push(passArr[Math.floor(Math.random() * passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }
    
    // lowercase and symbols
      else if (ucConfirm === false && numbersConfirm === false && symbolsConfirm === true){
        for (var i=0; i<count; i++){
            passArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)], symbols[Math.floor(Math.random()*symbols.length)]);
        }
        for (var i=0; i<count; i++) {
            finalArr.push(passArr[Math.floor(Math.random() * passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

    //   only lowercase
      else if (ucConfirm === false && numbersConfirm === false && symbolsConfirm === false){
        for (var i=0; i<count; i++){
            finalArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

    //   lowercase and uppercase
      else if (ucConfirm === true && numbersConfirm === false && symbolsConfirm === false){
        for (var i=0; i<count; i++){
            passArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)], upperCase[Math.floor(Math.random() * upperCase.length)]);
        }
        for (var i=0; i<count; i++){
          finalArr.push(passArr[Math.floor(Math.random()*passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

    //   no symbols
      else if (ucConfirm === true && numbersConfirm === true && symbolsConfirm ===false){
        for (var i=0; i<count; i++){
          passArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)], upperCase[Math.floor(Math.random()*upperCase.length)], numbers[Math.floor(Math.random()*numbers.length)]);
        }
        for (var i=0; i<count; i++){
          finalArr.push(passArr[Math.floor(Math.random()*passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

    //   lowercase and numbers
      else if (ucConfirm === false && numbersConfirm === true && symbolsConfirm === false){
        for (var i=0; i<count; i++){
          passArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)], numbers[Math.floor(Math.random()*numbers.length)]);
        }
        for (var i=0; i<count; i++){
          finalArr.push(passArr[Math.floor(Math.random()*passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

    //  no numbers
      else if (ucConfirm === true && numbersConfirm === false && symbolsConfirm === true){
        for (var i=0; i<count; i++){
          passArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)], upperCase[Math.floor(Math.random()*upperCase.length)], symbols[Math.floor(Math.random()*symbols.length)]);
        }
        for (var i=0; i<count; i++){
          finalArr.push(passArr[Math.floor(Math.random()*passArr.length)]);
        }
        // console.log to check
        console.log(finalArr.join(""));

        var password = finalArr.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        return finalArr;
      }

          
  }
      
  // else
  else {
      alert("Invalid input. Please choose a number between 8 and 128 and try again.");
  }
    }
    
    // Add event listener to generate button on click
    generateBtn.addEventListener("click", writePassword);
    
    // var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
    // var numbers = ["0123456789"]
    // var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    // var symbols = ["!#$%&'()*+,-./:;<=>?@^_{|}~"];



    // var password = finalArr.join("");
    // var passwordText = document.querySelector("#password");
    
    // passwordText.value = password;