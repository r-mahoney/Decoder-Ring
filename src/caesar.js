// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input = "", shift = 0, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25) return false;
    //if the inputted shift is non existant/equal to zero/ or less than or greater than 25 return false
    let output = [];
    let indexOfInputCharacters = [];
    let inputArr = input.toLowerCase().split("");
    let cipher;
    //if the user inputted shift is greater than 0 we perform the positive shift helper on the normal alphabet by the shift amount
    // otherwise we perform the negative shift helper function
    shift > 0
      ? (cipher = positiveShift(normalAlphabet, shift))
      : (cipher = negativeShift(normalAlphabet, shift));

    if (encode) {
      inputArr.forEach((character) => {
        //this code performs the same logic as the substitution function just using the generated shift and the normal alphabet
        //rather than the user inputed alphabet and the normal alphabet
        normalAlphabet.indexOf(character) > -1
          ? indexOfInputCharacters.push(normalAlphabet.indexOf(character))
          : indexOfInputCharacters.push(character);
      });
      indexOfInputCharacters.forEach((element) => {
        typeof element === "number"
          ? output.push(cipher[element])
          : output.push(element);
      });
      return output.join("");
    } else {
      inputArr.forEach((character) => {
        cipher.indexOf(character) > -1
          ? indexOfInputCharacters.push(cipher.indexOf(character))
          : indexOfInputCharacters.push(character);
      });
      indexOfInputCharacters.forEach((element) => {
        typeof element === "number"
          ? output.push(normalAlphabet[element])
          : output.push(element);
      });
      return output.join("");
    }
  }

  function positiveShift(input, numberToRemove) {
    //take in a user input and a number of elements to remove
    let shift = input.split("").slice(0, numberToRemove);
    //shift is going to be the alphabet split into an array of charatcers and then split it from the start to the number you want to remove
    let [...newArray] = input;
    // create a new array of you user input just to make sure you dont alter your alphabet
    for (let i = 0; i < numberToRemove; i++) {
      // while i is less than the number you want to remove, remove an element from the front of your array
      newArray.shift();
    }
    newArray.push(...shift);
    //take the new array which is the alphabet minus some elements at the end and add your shift which is the
    //letters of the alphabet you removed from the front
    return newArray;
  }

  function negativeShift(input, numberToRemove) {
    //same as positive shift but were popping elements from the back rather than shifting from the front
    //and we use an absolute value of number to remove since a negative shift is going to be a negative number
    let absVal = Math.abs(numberToRemove);
    let shift = input.split("").slice(input.length - absVal, input.length);
    let [...newArray] = input;
    for (let i = 0; i < absVal; i++) {
      newArray.pop();
    }
    newArray.unshift(...shift);
    return newArray;
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
};
