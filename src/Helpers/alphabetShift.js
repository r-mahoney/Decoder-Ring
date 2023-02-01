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

module.exports = alphShift;