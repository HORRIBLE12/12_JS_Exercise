const { expect } = require("chai")
const {checkScore } = require("../index")

describe("Conditional Statement", function() {
    it("if number is greater than 90, the output should be 'Your score is over 90'", function() {
        expect(checkScore(91)).to.equal("Your score is over 90")
    })
    it("if number is between 90 and 70, the output should be 'Your score is between 90 and 70'", function() {
        expect(checkScore(75)).to.equal("Your score is between 90 and 70")
    })
    it("if number is less than 70, the output should be 'Your score less than 70'", function() {
        expect(checkScore(69)).to.equal("Your score less than 70")
    })
    
})