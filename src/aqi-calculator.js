const dayjs = require("./dayjs.min");
const { BANDS, HOUR_DIFF } = require("./utils");

const calculateSubIndex = (arr = [], pollutant) => {
  // If not a known pollutant
  if (!Object.keys(HOUR_DIFF).includes(pollutant)) return null;

  // FIlter the values based on hours and null check
  const now = dayjs();
  // Hour diff specific to pollutant
  const hourDiff = HOUR_DIFF[pollutant];
  const filtered = arr.filter(
    ({ datetime, value }) =>
      value && now.diff(dayjs(datetime), "hours") < hourDiff
  );

  // If no values left, aqi is considered 0
  if (filtered.length <= 0) return null;

  // Average out the values
  const mean =
    filtered.reduce((acc, { value }) => acc + value, 0) / filtered.length;

  // Find which aqi bands it belongs
  const index = BANDS.findIndex(({ range }) => range[pollutant][1] >= mean);
  
  // Edge Case
  // if it exceeds the set bands
  if (index < 0) {
    const lastIndex = BANDS.length - 1;

    const aqiBase = BANDS[lastIndex].range.aqi[1];
    const pollutantBase = BANDS[lastIndex].range[pollutant][1];

    const aqi = (aqiBase / pollutantBase) * (mean - pollutantBase) + aqiBase;
    return aqi;
  }

  const [aqiLo, aqiHi] = BANDS[index].range.aqi;

  const [pollutantLo, pollutantHi] = BANDS[index].range[pollutant];

  // this is the basically the line equation where we take the ratio of slopes of
  // the two lines. two lines representing linear relation between subIndex and concentrations
  // Linear algebra 101
  const aqi =
    ((aqiHi - aqiLo) / (pollutantHi - pollutantLo)) * (mean - pollutantLo) +
    aqiLo;
  return aqi;
};

const calculateAQI = (arr) => {
  // validation
  if (!Array.isArray(arr) || arr.length === 0) return null;

  // Get the data in proper format
  const pollutantArr = arr.reduce((acc, val) => {
    Object.keys(HOUR_DIFF).map((key) => {
      const obj = {
        datetime: val.datetime,
        value: val[key],
      };
      acc[key] = acc[key] ? [...acc[key], obj] : [obj];
    });
    return acc;
  }, {});

  // Calculate subIndex of each pollutant
  const subIndexes = Object.keys(pollutantArr)
    .map((key) => calculateSubIndex(pollutantArr[key], key))
    .filter((val) => val);

  if (subIndexes.length === 0) return null;
  // The good stuff
  const nAQI = Math.max(...subIndexes);
  return Math.round(nAQI);
};

module.exports = calculateAQI;
