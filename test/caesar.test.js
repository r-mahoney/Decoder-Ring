// Write your tests here!
const { caesar, positiveShift, negativeShift } = require("../src/caesar");
const { expect } = require("chai");

describe("**************Caesar tests written by Me**************", () => {
  describe("caeser()", () => {
    it("should return false if shift is not given or is equal to 0", () => {
      const actual = caesar("", 0, true);
      expect(actual).to.be.false;
    });
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("", 26, true);
        expect(actual).to.be.false;
      });
      it("should return false if shift is less than 25", () => {
        const actual = caesar("", -26, true);
        expect(actual).to.be.false;
      });
      it("should encode a message by the given positive shift ", () => {
        const expected = caesar("message", 4, true);
        const actual = "qiwweki"
        expect(actual).to.equal(expected);
      });
      it("should encode a message by the given negative shift ", () => {
        const expected = caesar("message", -4, true);
        const actual = "iaoowca"
        expect(actual).to.equal(expected);
      });
      it("should decode a message by the given negative shift ", () => {
        const expected = caesar("iaoowca", -4, false);
        const actual = "message"
        expect(actual).to.equal(expected);
      });
      it("should decode a message by the given negative shift ", () => {
        const expected = caesar("qiwweki", 4, false);
        const actual = "message"
        expect(actual).to.equal(expected);
      });
      it("should account for spaces and special characters", () => {
        const expected = caesar("HeLLLo mY babY, Hello my DARling, Hello MY RagTIMe GALL!!!", 4, true);
        const actual = "lippps qc fefc, lipps qc hevpmrk, lipps qc vekxmqi kepp!!!"
        expect(actual).to.equal(expected);
      });
  });
});

