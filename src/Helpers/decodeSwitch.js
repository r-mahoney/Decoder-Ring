function decodeSwitch(char, arrToPushTo) {
    //switch/case for decoding. Cases are the 2 digits that match to each of the 26 letters
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
      //since i/j both resolve to 42, we push (I and J)
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
      //default to push any character that isnt a specified number to keep spaces and special characters
        arrToPushTo.push(char)
    }
  }

  module.exports = decodeSwitch;