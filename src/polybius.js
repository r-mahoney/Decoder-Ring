// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let output = [];
    
  }

  function encode(char, arrToPushTo) {
    switch (char) {
      case "A":
        arrToPushTo.push("11");
        break;
      case "B":
        arrToPushTo.push("12");
        break;
      case "C":
        arrToPushTo.push("13");
        break;
      case "D":
        arrToPushTo.push("14");
        break;
      case "E":
        arrToPushTo.push("15");
        break;
      case "F":
        arrToPushTo.push("21");
        break;
      case "G":
        arrToPushTo.push("22");
        break;
      case "H":
        arrToPushTo.push("23");
        break;
      case "I": case "J":
        arrToPushTo.push("24");
        break;
      case "K":
        arrToPushTo.push("25");
        break;
      case "L":
        arrToPushTo.push("31");
        break;
      case "M":
        arrToPushTo.push("32");
        break;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
