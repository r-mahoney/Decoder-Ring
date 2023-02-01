function encodeSwitch(char, arrToPushTo) {
    //switch/case for encoding matching Letters in the user input to the corresponding 2 numbers
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
        //case for i and j both resolve to 42
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
      //default case pushes anything that isnt a letter in the alphabet to keep spaces and special characters
        arrToPushTo.push(char)
    }
  }

  module.exports = encodeSwitch;