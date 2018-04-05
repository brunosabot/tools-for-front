import { round } from "./";

it("Round a JS math error", () => {
  const rounded = round(12.00000000000004, 2);
  expect(rounded).toBe(12);
});

it("Round a random number", () => {
  const rounded = round(12.123456789, 2);
  expect(rounded).toBe(12.12);
});
