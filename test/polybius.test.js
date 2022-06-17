const { expect } = require("chai");

const { polybius } = require("../src/polybius");

describe("decoding a message", () => {
  it("should return false if the length of all numbers are odd", () => {
    const input = "33112351";
    const actual = polybius(input, false);
    const expected = "name";

    expect(actual).to.equal(expected);
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    const input = "1254333345";
    const actual = polybius(input, false);
    const expected = "funny";

    expect(actual).to.equal(expected);
  });
});

describe("encoding a message", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const input = "blue";
    const actual = polybius(input);
    const expected = "21135451";

    expect(actual).to.equal(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const input = "igloo";
    const actual = polybius(input);
    const expected = "4222134343";

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as is", () => {
    const input = "friends always";
    const actual = polybius(input);
    const expected = "12244251334134 111325114534";

    expect(actual).to.equal(expected);
  });
});
