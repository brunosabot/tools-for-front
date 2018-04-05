import { encode, decode } from "./";

it("Encode URL", () => {
  const url = encode("https://tools.brunosabot.com/#/timestamp");
  expect(url).toBe("https%3A%2F%2Ftools.brunosabot.com%2F%23%2Ftimestamp");
});

it("Decode URL", () => {
  const url = decode("https%3A%2F%2Ftools.brunosabot.com%2F%23%2Ftimestamp");
  expect(url).toBe("https://tools.brunosabot.com/#/timestamp");
});
