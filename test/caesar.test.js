const { expect } = require("chai");

const { caesar } = require("../src/caesar");

describe("error handing", () => {
  it("should return false if the shift amount is 0", () => {
    const input = "hello";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is above 25", () => {
    const input = "hello";
    const shift = 27;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is less than -25", () => {
    const input = "hello";
    const shift = -27;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message by shifting the letters", () => {
    const input = "word";
    const shift = 5;
    const actual = caesar(input, shift);
    const expected = "btwi";

    expect(actual).to.equal(expected);
  });

  it("should leave spaces and other symbols as is", () => {
    const input = "fun $";
    const shift = 6;
    const actual = caesar(input, shift);
    const expected = "lat $";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Every";
    const shift = 9;
    const actual = caesar(input, shift);
    const expected = "nenah";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const input = "zebra";
    const shift = 14;
    const actual = caesar(input, shift);
    const expected = "nspfo";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift to the left", () => {
    const input = "fine";
    const shift = -19;
    const actual = caesar(input, shift);
    const expected = "mpul";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const input = "njvk";
    const shift = -5;
    const actual = caesar(input, shift, false);
    const expected = "soap";

    expect(actual).to.equal(expected);
  });
});
