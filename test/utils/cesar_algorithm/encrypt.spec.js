import { encrypt } from "~/utils/cesar_algorithm";
describe("Encrypt Cesar Algorithm", () => {
  test("one character", () => {
    expect(encrypt("a", 1)).toBe("b");
  });
  test("many characters", () => {
    expect(encrypt("abc", 1)).toBe("bcd");
  });
  test("ends in z return a if key is 1", () => {
    expect(encrypt("xyz", 1)).toBe("yza");
  });
  test("ends in z return a if key is 2", () => {
    expect(encrypt("xyz", 2)).toBe("zab");
  });
  test("uppercase and lowercase", () => {
    expect(encrypt("AbC", 1)).toBe("BcD");
  });
  test("uppercase and lowercase and end in Z", () => {
    expect(encrypt("abZ", 1)).toBe("bcA");
  });
  test("uppercase and lowercase and end in Z and key is 2", () => {
    expect(encrypt("abZ", 2)).toBe("cdB");
  });

  test("is a number", () => {
    expect(encrypt('123', 1)).toBe("234");
  });
  test("is a number and ends in 9", () => {
    expect(encrypt('95', 1)).toBe("06");
  });
  test("is a number and ends in 9 and key is 2", () => {
    expect(encrypt('129', 2)).toBe("341");
  });
  test("is an alphanumeric", () => {
    expect(encrypt('123abc', 1)).toBe("234bcd");
  });
  test("is alphanumeric with whitespaces", () => {
    expect(encrypt('123 abc', 1)).toBe("234 bcd");
  });
});
