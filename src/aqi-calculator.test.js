const calculateAQI = require("./aqi-calculator");
const testData = require("./test-data");

test("AQI is 0 when null is passed.", () => {
  expect(calculateAQI(null)).toBe(0);
});

test("AQI is 0 when undefined is passed.", () => {
  expect(calculateAQI(undefined)).toBe(0);
});

test("AQI is 0 when string is passed.", () => {
  expect(calculateAQI("AQI")).toBe(0);
});

test("AQI is 0 when empty array is passed.", () => {
  expect(calculateAQI([])).toBe(0);
});

test("AQI is 0 when incorrect array is passed.", () => {
  expect(calculateAQI([123, 324, 567])).toBe(0);
});

test("AQI is 0 when empty object is passed.", () => {
  expect(calculateAQI({})).toBe(0);
});

test("AQI is 0 when object is passed.", () => {
  expect(calculateAQI({ AQI: 323 })).toBe(0);
});

test("AQI is greater than 300 when a test data is passed.", () => {
  expect(calculateAQI(testData)).toBeGreaterThan(300);
});
