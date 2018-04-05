import { getDate, getIsoDate } from "./";

it("Get data from timestamp", () => {
  const date = getDate(1234567890, false);
  expect(date).toEqual({
    year: 2009,
    month: 2,
    day: 13,
    hours: 23,
    minutes: 31,
    seconds: 30,
    milliseconds: 0
  });
});

it("Get data from microseconds type timestamp", () => {
  const date = getDate(1234567890123, true);
  expect(date).toEqual({
    year: 2009,
    month: 2,
    day: 13,
    hours: 23,
    minutes: 31,
    seconds: 30,
    milliseconds: 123
  });
});

it("Get ISO date from timestamp", () => {
  const date = getIsoDate(1234567890, false);
  expect(date).toBe("Fri, 13 Feb 2009 23:31:30 GMT");
});

it("Get ISO date from microseconds type timestamp", () => {
  const date = getIsoDate(1234567890123, true);
  expect(date).toBe("Fri, 13 Feb 2009 23:31:30 GMT");
});
