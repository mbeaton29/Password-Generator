// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var promptLength = window.prompt("How many characters would you like your password to have?");
 
  var actualLength = parseInt(promptLength);

  // window.prompt('Would you like to use lowercase characters?');
  if (promptLength === "" || promptLength === null) {
    window.alert("Please respond with a number between 8 and 128");
    return promptLength;
  } else if (promptLength >= 8 && promptLength <= 128) {
    var promptLowercase = window.prompt("Would you like to use lowercase characters?");
    if (promptLowercase === "" || promptLowercase === null) {
      window.alert("Please respond with yes or no. ");
      return promptLowercase;
    } else if (promptLowercase === "yes" || promptLowercase === "no") {

      if (promptLowercase == "yes") {
        var lowercase = "abcdefghijklmnopqrstuvwxyz";

      } else if (promptLowercase == "no") {
        var lowercase = "";
      }

      var promptUppercase = window.prompt("Would you like to use uppercase characters?");
      if (promptUppercase === "" || promptUppercase === null) {
        window.alert("Please respond with yes or no. ");
      } else if (promptUppercase == "yes" || promptUppercase == "no") {

        if (promptUppercase == "yes") {
          var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        } else if (promptUppercase == "no") {
          var uppercase = "";
        }
        var promptNumbers = window.prompt("Would you like to use numerical characters?");
        if (promptNumbers === "" || promptNumbers === null) {
          window.alert("Please respond with yes or no. ");
        } else if (promptNumbers == "yes" || promptNumbers == "no") {

          if (promptNumbers == "yes") {
            var numbers = "0123456789";

          } else if (promptNumbers == "no") {
            var numbers = "";
          }

          var promptCharacters = window.prompt("Would you like to use special characters?");
          if (promptCharacters === "" || promptCharacters === null) {
            window.alert("Please respond with yes or no. ");
          } else if (promptCharacters == "yes" || promptCharacters == "no") {

            if (promptCharacters == "yes") {
              var characters = "!@#$%^&*()";

            } else if (promptCharacters == "no") {
              var characters = "";
            }

            passwordGenerator(actualLength, lowercase, uppercase, numbers, characters);

            function passwordGenerator(actualLength, lowercase, uppercase, numbers, characters) {
              password = "";
              password.length = actualLength;
              actualLength = actualLength;
              lowercase = lowercase;
              uppercase = uppercase;
              numbers = numbers;
              characters = characters;
              var chars = [lowercase, uppercase, numbers, characters].join();

              for (var i = 0; i < actualLength; i++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1);
                // if (i.length == i - 1) {
                //   break;
                // }
              }
              document.getElementById("password").value = password;
              // return alert(password);
              return;


            }
          } else if (promptCharacters !== "no" || promptCharacters !== "yes") {
            window.alert("Please respond with yes or no.");
          }
        } else if (promptCharacters !== "no" || promptCharacters !== "yes") {
          window.alert("Please respond with yes or no.");
        }



      } else if (promptNumbers !== "no" || promptNumbers !== "yes") {
        window.alert("Please respond with yes or no.");
      }

    } else if (promptLowercase !== "no" || promptLowercase !== "yes") {
      window.alert("Please respond with yes or no.");
      promptLowercase;
    }
  } else {

    alert("please choose a number between 8 and 128");
    return promptLength;
  }
}