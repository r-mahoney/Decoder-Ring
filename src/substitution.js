// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // create a normal alphabet to use as a reference
  //made it a string because I didnt want to type out characters with "" and , in an array
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input = "", alphabet = "", encode = true) {
    // if the alphabet argument is not 26 characters or there arent 26 unique characters return flase
    if (alphabet.length !== 26 || checkForUniqueCharacters(alphabet) !== 26) return false;
    //create an empty array to push final charcters into
    let output = [];
    //create an empty aray to push index of each character of input as it relates to the normal alphabet
    let indexOfInputCharacters = []
    //turn the input into an array or lower case character to make it easier to work with
    let inputArr = input.toLowerCase().split('');

    if(encode) { //if encode you are encoding
      //for each character in the input array if the index of teh character is present in the normal alphabet,
      //store the index in the index array to use later.
      //if the index of the character is -1 then its not in the alphabet and we can just push the character to the index array
      //since we want to keep any spaces or special characters the same
      inputArr.forEach(character => {
        normalAlphabet.indexOf(character) > -1 ? indexOfInputCharacters.push(normalAlphabet.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        //for each element in the array, if it is a number, match the index in indexofInputCharacters array to the character at the 
        //matching index in the user inputed alphabet. If its not a number, push the character to keep spaces and special characters
        //the same
        typeof (element) === "number" ? output.push(alphabet[element]) : output.push(element)
      })
      return output.join(''); //take output which should be an array of encoded letters and join them to return a word or scentence
    } else {
      //if encode !== true then youre decoding
      inputArr.forEach(character => {
        //take the input array and for each character find its index in the user inputted alphabet and store it in an array
        //if the index doesnt exist, store the space or special character in the array
        alphabet.indexOf(character) > -1 ? indexOfInputCharacters.push(alphabet.indexOf(character)) : indexOfInputCharacters.push(character);
      })
      indexOfInputCharacters.forEach(element => {
        //take all the indices of the input and match them to the corresponding index in the normal alphabet
        typeof (element) === "number" ? output.push(normalAlphabet[element]) : output.push(element);
      })
      return output.join('')
      // join the array of unencoded characters
    }
  }

  function checkForUniqueCharacters(string) {
    //helper function to check the user inputted alphabet for unique characters
    let array = [];
    for (let i = 0; i < string.length; i++) {
      //loop through each element in the user inputted alphabet
      if (!array.includes(string[i])) {
      //if the empty array doesnt include the current element, push the element to the array
        array.push(string[i]);
      }
    }
    return array.length;
    //returning the length of the array so we can check if it has 26 characters later. If !== 26 the one character didnt get pushed
    //meaning it was a duplicate
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
