const calculateAQI = require("./aqi-calculator");
const testData = require("./test-data");
const dayjs = require("./dayjs.min");

test("AQI is null when null is passed.",
     () => { expect(calculateAQI(null)).toBe(null); });

test("AQI is null when undefined is passed.",
     () => { expect(calculateAQI(undefined)).toBe(null); });

test("AQI is null when string is passed.",
     () => { expect(calculateAQI("AQI")).toBe(null); });

test("AQI is null when empty array is passed.",
     () => { expect(calculateAQI([])).toBe(null); });

test("AQI is null when incorrect array is passed.", () => {
  expect(calculateAQI([ 123, 324, 567 ])).toBe(null);
});

test("AQI is null when empty object is passed.",
     () => { expect(calculateAQI({})).toBe(null); });

test("AQI is null when object is passed.",
     () => { expect(calculateAQI({AQI : 323})).toBe(null); });

test("AQI is greater than 300 when a test data is passed.",
     () => { expect(calculateAQI(testData)).toBeGreaterThan(300); });

test("Should return correct aqi", () => {
  expect(calculateAQI([
    {
      pm25 : 34,
      pm10 : 121,
      s02 : 0,
      nox : 8,
      co : 0,
      o3 : 57,
      datetime : new Date().toISOString(),
    },
  ])).toEqual(114);
});

test("Should return null when all values are null ", () => {
  expect(calculateAQI([
    {
      pm25 : null,
      pm10 : null,
      s02 : null,
      nox : null,
      co : null,
      o3 : null,
      datetime : new Date().toISOString(),
    },
  ])).toEqual(null);
});

test("Should return 167 when only pm25 is 80", () => {
  expect(calculateAQI([
    {
      pm25 : 80,
      pm10 : null,
      s02 : null,
      nox : null,
      co : null,
      o3 : null,
      datetime : new Date().toISOString(),
    },
  ])).toEqual(167);
});

test("Return null when last datetime is more than 24hrs ago  ", () => {
  const datetime = dayjs(new Date()).subtract(26, "hours").toISOString();

  expect(calculateAQI([
    {
      pm25 : null,
      pm10 : null,
      s02 : null,
      nox : null,
      co : null,
      o3 : null,
      datetime : datetime,
    },
  ])).toEqual(null);
});

test("Should return correct aqi ", () => {
  const inputArray = [
    {
      pm25 : 20,
      pm10 : 150,
      s02 : 10,
      nox : 8,
      co : 4,
      o3 : 1,
      datetime : dayjs(new Date()).toISOString(),
    },
    {
      pm25 : 10,
      pm10 : 160,
      s02 : 8,
      nox : 2,
      co : 4,
      o3 : 1,
      datetime : dayjs(new Date()).subtract(2, "hours").toISOString(),
    },
  ];
  expect(calculateAQI(inputArray)).toEqual(137);
});

test("Should return correct aqi ", () => {
  const inputArray = [
    {
      pm25 : 10,
      pm10 : 1,
      s02 : 0,
      nox : 0,
      co : 0,
      o3 : 1,
      datetime : dayjs(new Date()).toISOString(),
    },
  ];
  expect(calculateAQI(inputArray)).toEqual(17);
});

test("Should return correct aqi ", () => {
  const inputArray = [
    {
      pm25 : 900,
      pm10 : 1,
      s02 : 0,
      nox : 0,
      co : 0,
      o3 : 1,
      datetime : dayjs(new Date()).toISOString(),
    },
  ];
  expect(calculateAQI(inputArray)).toEqual(487);
});

// edge case: when obtained concentration is more that lastIndex of range bands
test("Should return correct aqi ", () => {
  const inputArray = [
    {
      pm25 : 1100,
      pm10 : 1,
      s02 : 0,
      nox : 0,
      co : 0,
      o3 : 1,
      datetime : dayjs(new Date()).toISOString(),
    },
  ];
  expect(calculateAQI(inputArray)).toEqual(550);
});
