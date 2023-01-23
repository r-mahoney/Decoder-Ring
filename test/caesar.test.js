// Write your tests here!
const { caesar } = require("../src/caesar");
const {expect} = require('chai');

describe("**************Caesar tests written by Me**************", () => {
    it("should return false if shift is not given or is equal to 0", () => {
        const actual = caesar("", 0, true);
        expect(actual).to.be.false
    })
})
