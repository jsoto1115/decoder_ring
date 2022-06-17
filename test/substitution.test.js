const { expect } = require("chai");

const { substitution } = require("../src/substitution");

describe("error handling", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const input = "yellow";
    const alphabet = 0;
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const input = "red";
    const alphabet = 29;
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const input = "purple";
    const alphabet = -29;
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    const input = "black";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet);
    const expected = "!&qwd";

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const input = "brown";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet);
    const expected = "!)gb*";

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const input = "green";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet);
    const expected = "o)rr*";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    const input = "wg&g)a";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet, false);
    const expected = "colors";

    expect(actual).to.equal(actual);
  });

  it("should work with any kind of key with unique characters", () => {
    const input = "bq_r)";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet, false);
    const expected = "water";

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const input = "$gg@";
    const alphabet = "q!w@r$o%m^d&p*g(n)a_t+b?j6";
    const actual = substitution(input, alphabet, false);
    const expected = "food";

    expect(actual).to.equal(expected);
  });
});
