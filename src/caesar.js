// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input = "", shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;

    let inputArr = input.toLowerCase().split("");
    let cipher = alphShift(normalAlphabet, shift);

    if (encode) {
        return inputArr
            .reduce((accum, character) => {
                return normalAlphabet.indexOf(character) > -1
                    ? accum.concat(normalAlphabet.indexOf(character))
                    : accum.concat(character);
            }, [])
            .reduce((accum, element) => {
                return typeof element === "number"
                    ? accum.concat(cipher[element])
                    : accum.concat(element);
            }, [])
            .join("");
    } else {
        return inputArr
            .reduce((accum, character) => {
                return cipher.indexOf(character) > -1
                    ? accum.concat(cipher.indexOf(character))
                    : accum.concat(character);
            }, [])
            .reduce((accum, element) => {
                return typeof element === "number"
                    ? accum.concat(normalAlphabet[element])
                    : accum.concat(element);
            }, [])
            .join("");
    }
}

function alphShift(input, numberToRemove) {
    let [...newArray] = input;
    //take in a user input and a number of elements to remove
    if (numberToRemove > 0) {
        let shift = input.split("").slice(0, numberToRemove);
        //shift is going to be the alphabet split into an array of charatcers and then split it from the start to the number you want to remove
        // create a new array of you user input just to make sure you dont alter your alphabet
        for (let i = 0; i < numberToRemove; i++) {
            // while i is less than the number you want to remove, remove an element from the front of your array
            newArray.shift();
        }
        newArray.push(...shift);
        //take the new array which is the alphabet minus some elements at the end and add your shift which is the
        //letters of the alphabet you removed from the front
    } else {
        //same as positive shift but were popping elements from the back rather than shifting from the front
        //and we use an absolute value of number to remove since a negative shift is going to be a negative number
        let absVal = Math.abs(numberToRemove);
        let shift = input.split("").slice(input.length - absVal, input.length);
        for (let i = 0; i < absVal; i++) {
            newArray.pop();
        }
        newArray.unshift(...shift);
    }
    return newArray;
}

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
};
