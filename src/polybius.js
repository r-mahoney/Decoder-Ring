// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let output = [];


    if (encode) {
      let inputArr = input.toUpperCase().split("");
      for (char of inputArr) {
        encodeSwitch(char, output)
      }
    } else {
      if(input.split(" ").join("").length %2 !== 0) return false
      let regex = /([0-9][0-9])/;
      let inputArr = input.split(regex).filter(result => (result !== ""))
      
      for (char of inputArr) {
        decodeSwitch(char, output)
      }
    }
    return (output.join("").toLowerCase()) 
  }


  function encodeSwitch(char, arrToPushTo) {
    switch (char) {
      case "A":
        arrToPushTo.push("11");
        break;
      case "B":
        arrToPushTo.push("21");
        break;
      case "C":
        arrToPushTo.push("31");
        break;
      case "D":
        arrToPushTo.push("41");
        break;
      case "E":
        arrToPushTo.push("51");
        break;
      case "F":
        arrToPushTo.push("12");
        break;
      case "G":
        arrToPushTo.push("22");
        break;
      case "H":
        arrToPushTo.push("32");
        break;
      case "I": case "J":
        arrToPushTo.push("42");
        break;
      case "K":
        arrToPushTo.push("52");
        break;
      case "L":
        arrToPushTo.push("13");
        break;
      case "M":
        arrToPushTo.push("23");
        break;
      case "N":
        arrToPushTo.push("33");
        break;
      case "O":
        arrToPushTo.push("43");
        break;
      case "P":
        arrToPushTo.push("53");
        break;
      case "Q":
        arrToPushTo.push("14");
        break;
      case "R":
        arrToPushTo.push("24");
        break;
      case "S":
        arrToPushTo.push("34");
        break;
      case "T":
        arrToPushTo.push("44");
        break;
      case "U":
        arrToPushTo.push("54");
        break;
      case "V":
        arrToPushTo.push("15");
        break;
      case "W":
        arrToPushTo.push("25");
        break;
      case "X":
        arrToPushTo.push("35");
        break;
      case "Y":
        arrToPushTo.push("45");
        break;
      case "Z":
        arrToPushTo.push("55");
        break;
      default:
        arrToPushTo.push(char)
    }
  }

  function decodeSwitch(char, arrToPushTo) {
    switch (char) {
      case "11":
        arrToPushTo.push("A");
        break;
      case "21":
        arrToPushTo.push("B");
        break;
      case "31":
        arrToPushTo.push("C");
        break;
      case "41":
        arrToPushTo.push("D");
        break;
      case "51":
        arrToPushTo.push("E");
        break;
      case "12":
        arrToPushTo.push("F");
        break;
      case "22":
        arrToPushTo.push("G");
        break;
      case "32":
        arrToPushTo.push("H");
        break;
      case "42":
        arrToPushTo.push("(I/J)");
        break;
      case "52":
        arrToPushTo.push("K");
        break;
      case "13":
        arrToPushTo.push("L");
        break;
      case "23":
        arrToPushTo.push("M");
        break;
      case "33":
        arrToPushTo.push("N");
        break;
      case "43":
        arrToPushTo.push("O");
        break;
      case "53":
        arrToPushTo.push("P");
        break;
      case "14":
        arrToPushTo.push("Q");
        break;
      case "24":
        arrToPushTo.push("R");
        break;
      case "34":
        arrToPushTo.push("S");
        break;
      case "44":
        arrToPushTo.push("T");
        break;
      case "54":
        arrToPushTo.push("U");
        break;
      case "15":
        arrToPushTo.push("V");
        break;
      case "25":
        arrToPushTo.push("W");
        break;
      case "35":
        arrToPushTo.push("X");
        break;
      case "45":
        arrToPushTo.push("Y");
        break;
      case "55":
        arrToPushTo.push("Z");
        break;
      default:
        arrToPushTo.push(char)
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
