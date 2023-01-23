// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input = "", shift = 0, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25) return false;
    let output = [];
    let indexOfInputCharacters = [];
    let inputArr = input.toLowerCase().split('');
    let cipher;
    shift > 0 ? cipher = positiveShift(normalAlphabet, shift) : cipher = negativeShift(normalAlphabet, shift)
    

    if (encode) {
      inputArr.forEach(character => {
        normalAlphabet.indexOf(character) > -1 ? indexOfInputCharacters.push(normalAlphabet.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        typeof (element) === "number" ? output.push(cipher[element]) : output.push(element);
      })
      return (output.join(""))
    } else {
      inputArr.forEach(character => {
        cipher.indexOf(character) > -1 ? indexOfInputCharacters.push(cipher.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        typeof (element) === "number" ? output.push(normalAlphabet[element]) : output.push(element);
      })
      return output.join('')
    }

  }

  function positiveShift(input, numberToRemove) {
    let shift = input.split('').slice(0, numberToRemove);
    let [...newArray] = input;
    for (let i = 0; i < numberToRemove; i++) {
      newArray.shift();
    }
    newArray.push(...shift);
    return (newArray);
  }

  function negativeShift(input, numberToRemove) {
    let absVal = Math.abs(numberToRemove)
    let shift = input.split('').slice(input.length - absVal, input.length)
    let [...newArray] = input;
    for (let i = 0; i < absVal; i++) {
      newArray.pop()
    }
    newArray.unshift(...shift);
    return newArray;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
