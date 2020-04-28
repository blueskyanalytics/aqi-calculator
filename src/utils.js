const BANDS = [
  {
    label : "Good",
    color : "#009900",
    range : {
      pm25 : [ 0, 30 ],
      pm10 : [ 0, 50 ],
      so2 : [ 0, 40 ],
      no : [ 0, 40 ],
      nox : [ 0, 40 ],
      no2 : [ 0, 40 ],
      o3 : [ 0, 50 ],
      co : [ 0, 1 ],
      aqi : [ 0, 50 ],
    },
  },
  {
    label : "Satisfactory",
    color : "#59B300",
    range : {
      pm25 : [ 30, 60 ],
      pm10 : [ 50, 100 ],
      so2 : [ 40, 80 ],
      no : [ 40, 80 ],
      nox : [ 40, 80 ],
      no2 : [ 40, 80 ],
      o3 : [ 50, 100 ],
      co : [ 1, 2 ],
      aqi : [ 50, 100 ],
    },
  },
  {
    label : "Moderately Polluted",
    color : "#DFDF31",
    range : {
      pm25 : [ 60, 90 ],
      pm10 : [ 100, 250 ],
      so2 : [ 80, 380 ],
      no : [ 80, 180 ],
      nox : [ 80, 180 ],
      no2 : [ 80, 180 ],
      o3 : [ 100, 168 ],
      co : [ 2, 10 ],
      aqi : [ 100, 200 ],
    },
  },
  {
    label : "Poor",
    color : "#E68A00",
    range : {
      pm25 : [ 90, 120 ],
      pm10 : [ 250, 350 ],
      so2 : [ 380, 800 ],
      no : [ 180, 280 ],
      nox : [ 180, 280 ],
      no2 : [ 180, 280 ],
      o3 : [ 168, 280 ],
      co : [ 10, 17 ],
      aqi : [ 200, 300 ],
    },
  },
  {
    label : "Very Poor",
    color : "#E82C0C",
    range : {
      pm25 : [ 120, 250 ],
      pm10 : [ 350, 430 ],
      so2 : [ 800, 1600 ],
      no : [ 280, 400 ],
      nox : [ 280, 400 ],
      no2 : [ 280, 400 ],
      o3 : [ 280, 400 ],
      co : [ 17, 34 ],
      aqi : [ 300, 400 ],
    },
  },
  {
    label : "Severe",
    color : "#A52A2A",
    range : {
      pm25 : [ 250, 1000 ],
      pm10 : [ 430, 1000 ],
      so2 : [ 1600, 2000 ],
      no : [ 400, 1000 ],
      nox : [ 400, 1000 ],
      no2 : [ 400, 1000 ],
      o3 : [ 400, 1000 ],
      co : [ 34, 50 ],
      aqi : [ 400, 500 ],
    },
  },
];

const HOUR_DIFF = {
  pm25 : 24,
  pm10 : 24,
  so2 : 24,
  nox : 24,
  o3 : 8,
  co : 8,
};

module.exports = {
  BANDS,
  HOUR_DIFF
};
