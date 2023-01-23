// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input = "", alphabet = "", encode = true) {
    // your solution code here
    if (alphabet.length !== 26 || checkForUniqueCharacters(alphabet) !== 26) return false;
    let output = [];
    let indexOfInputCharacters = []
    let inputArr = input.toLowerCase().split('');

    if(encode) {
      inputArr.forEach(character => {
        normalAlphabet.indexOf(character) > -1 ? indexOfInputCharacters.push(normalAlphabet.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        typeof (element) === "number" ? output.push(alphabet[element]) : output.push(element)
      })
      return output.join('');
    } else {
      inputArr.forEach(character => {
        alphabet.indexOf(character) > -1 ? indexOfInputCharacters.push(alphabet.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        typeof (element) === "number" ? output.push(normalAlphabet[element]) : output.push(element);
      })
      return output.join('')
    }
  }

  function checkForUniqueCharacters(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
      if (!array.includes(string[i])) {
        array.push(string[i]);
      }
    }
    return array.length;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
