// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("********** Substitutioin tests written by Ryan Mahoney **********", () => {
  describe("substitution() encoding", () => {
    it("Should return false if an alphabet is not supplied", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
    it("Should return false if the alphabet is less than 26 characters", () => {
      const message = "message";
      const alphabet = "shortie";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("Should return false if the alphabet has 2 characters that are the same", () => {
      const message = "message";
      const alphabet = "notuniqueenough";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("Should return an encoded message when given a properly formatted alphabet", () => {
      const message = "message";
      const alphabet = "lpmkonjibhuvgycftxdrzseawq";
      const actual = substitution(message, alphabet);
      const expected = "goddljo";
      expect(actual).to.equal(expected);
    });
    describe("Decoding", () => {
      it("Should decode a message when given the correct alphabet  key", () => {
        const alphabet = "lpmkonjibhuvgycftxdrzseawq";
        const message = "goddljo";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
      });
      it("Should decode a message when given the correct alphabet  key", () => {
        const alphabet = "lpmkonjibhuvgycftxdrzseawq";
        const message = "goddljo";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
      });
      it("Should account for special characters", () => {
        const alphabet = "lpmkonjibhuv.ycftxdrzse/wq";
        const message = "rio tzbmu pxcey nc/";
        const actual = substitution(message, alphabet, false);
        const expected = "the quick brown fox";
        expect(actual).to.equal(expected);
      });
    });
  });
});
