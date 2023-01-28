// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("**************** Polybius tests written by yours truly ****************", () => {
  describe("Encoding a message", () => {
    it('Should encode a message when given a properly formatted message', () => {
        const message = "message";
        const expected = "23513434112251";
        const actual = polybius(message);
    })
    it("Should translate both i and j to 42", () => {
      const message = "my money dont jiggle jiggle";
      const expected = "2345 2343335145 41433344 424222221351 424222221351";
      const actual = polybius(message);
      expect(actual).to.equal(expected);
    });

    it("Should leave spaces as is", () => {
      const message = "space space space";
      const expected = "3453113151 3453113151 3453113151";
      const actual = polybius(message);
      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding a message", () => {
    it('Should decode a message when given a properly formatted message', () => {
        const message = "23513434112251";
        const expected = "message";
        const actual = polybius(message)
    });
    it("Should translate 42 to be (i/j)", () => {
      const message = "2345 2343335145 41433344 424222221351 424222221351";
      const expected = "my money dont (i/j)(i/j)ggle (i/j)(i/j)ggle";
      const actual = polybius(message, false);
      expect(actual).to.equal(expected);
    });

    it("Should leave spaces as is", () => {
      const message = "3453113151 3453113151 3453113151";
      const expected = "space space space";
      const actual = polybius(message, false);
      expect(actual).to.equal(expected);
    });
  });
});
