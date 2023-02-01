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

  module.exports = checkForUniqueCharacters;