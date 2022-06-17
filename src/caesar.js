// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25 || !shift || !input) {
      return false
    }
   if(encode === false) shift = 0 - shift 

let arr = input.toLowerCase().split("");
let letter = null;
let result = [];

for(let i = 0; i < arr.length; i++) {
letter = arr[i].charCodeAt()

if(letter < 96) letter = letter
else if (shift + letter < 97) letter += shift + 26
else if (shift + letter > 122) letter += shift - 26
else letter = letter + shift 

result.push(String.fromCharCode(letter)) 
}
return result.join("")
}
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
