import { getBoxShadow, getBoxShadowValue } from "./";

it("Not inset shadow", () => {
  const url = getBoxShadow(120, 10, 10, 50, false, "rgba(0, 0, 0, 0.75)");
  expect(url).toBe("box-shadow: 5px 9px 5px 5px rgba(0, 0, 0, 0.75);");
});

it("Inset shadow", () => {
  const url = getBoxShadow(120, 10, 10, 50, true, "rgba(0, 0, 0, 0.75)");
  expect(url).toBe("box-shadow: 5px 9px 5px 5px rgba(0, 0, 0, 0.75) inset;");
});

it("Not inset shadow value", () => {
  const url = getBoxShadowValue(120, 10, 10, 50, false, "rgba(0, 0, 0, 0.75)");
  expect(url).toBe("5px 9px 5px 5px rgba(0, 0, 0, 0.75)");
});

it("Inset shadow value", () => {
  const url = getBoxShadowValue(120, 10, 10, 50, true, "rgba(0, 0, 0, 0.75)");
  expect(url).toBe("5px 9px 5px 5px rgba(0, 0, 0, 0.75) inset");
});
