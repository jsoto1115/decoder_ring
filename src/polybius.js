// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let encodeSquare = {
" ": " ", "a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "41", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  }  
let decodeSquare = {
" ": " ", "11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k", "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "41": "q", "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
}
// write an encode function 
function encoder(input) {
  let word = input.toLowerCase().split("")
  let result = ""
for(letter of word) {
  if(letter in encodeSquare) {
    result += encodeSquare[letter]
  }
}
return result
}
// write a decode function
function decoder(input) {
  let result = ""
  for(let i = 0; i < input.length; i+=2) {
    if(input[i] === " ") {
      result += " "
      i = i-1
    }else{
      current = input[i] + input[i+1]
      result += decodeSquare[current]
    }
  }
  return result
}
  function polybius(input, encode = true) {
    // your solution code here
    if(encode === false) {
      if(input.split(" ").join("").length % 2 == 1) {
        return false
      }
      return decoder(input)
    }
    return encoder(input)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
