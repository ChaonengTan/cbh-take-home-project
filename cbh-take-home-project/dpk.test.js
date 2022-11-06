const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("numericPartitionKey", () => {
  const numericValue = Math.floor(Math.random() * 256)
  const crypto = require("crypto");
  const expectedOutput = crypto.createHash("sha3-512").update(JSON.stringify(numericValue)).digest("hex")
  // test
  it("returns sha3-512 hex hash when input is numeric", () => {
    const trivialKey = deterministicPartitionKey(numericValue);
    expect(trivialKey).toBe(expectedOutput);
  });
});

describe("alphaPartitionKey", () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)]
  const crypto = require("crypto");
  const expectedOutput = crypto.createHash("sha3-512").update(JSON.stringify(randomChar)).digest("hex")
  // test
  it("returns sha3-512 hex hash when input is alphabetical", () => {
    const trivialKey = deterministicPartitionKey(randomChar);
    expect(trivialKey).toBe(expectedOutput);
  });
});