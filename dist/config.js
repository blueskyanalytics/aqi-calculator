(function () {
// ASSET: config.js
var $itQ5$exports = {};
var $itQ5$var$POLLUTANT_LABEL_COLOR_REF = [{
  label: "Good",
  color: "#009900"
}, {
  label: "Satisfactory",
  color: "#59B300"
}, {
  label: "Moderate",
  color: "#DFDF31"
}, {
  label: "Poor",
  color: "#E68A00"
}, {
  label: "Very Poor",
  color: "#E82C0C"
}, {
  label: "Severe",
  color: "#A52A2A"
}];
var $itQ5$var$POLLUTANT_RANGE_REF = {
  pm25: [0, 30, 60, 90, 120, 250, 1000],
  pm10: [0, 50, 100, 250, 350, 430, 1000],
  so2: [0, 40, 80, 380, 800, 1600, 2000],
  no: [0, 40, 80, 180, 280, 400, 1000],
  nox: [0, 40, 80, 180, 280, 400, 1000],
  no2: [0, 40, 80, 180, 280, 400, 1000],
  o3: [0, 50, 100, 168, 280, 400, 1000],
  co: [0, 1, 2, 10, 17, 34, 50],
  aqi: [0, 50, 100, 200, 300, 400, 500]
};
var $itQ5$var$POLLUTANT_UNITS = {
  pm25: "µg/m3",
  pm10: "µg/m3",
  so2: "µg/m3",
  no2: "µg/m3",
  nox: "µg/m3",
  benzene: "µg/m3",
  o3: "µg/m3",
  nh3: "µg/m3",
  co: " mg/m3",
  co2: "µg/m3",
  no: " µg/m3",
  temperature: "°C"
};
var $itQ5$var$POLLUTANT_FULL_NAME = {
  // pm1: 'PM 1',
  pm25: "Particulate matter 2.5",
  pm10: "Particulate matter 10",
  so2: "Sulphur dioxide",
  // no: "Nitrogen Monoxide",
  nox: "Nitrogen oxides",
  // no2: "Nitrogen Dioxide",
  o3: "Ozone",
  // co2: 'Carbon Dioxide',
  co: "Carbon monoxide" // nh3: 'Ammonia',
  // benzene: 'Benzene',
  // xylene: 'Xylene',
  // toluene: 'Toluene',

};
var $itQ5$var$POLLUTANT_OPTIONS = {
  // pm1: 'PM 1',
  pm25: "PM 2.5",
  pm10: "PM 10",
  so2: "SO2",
  // no: "Nitrogen Monoxide",
  nox: "NOX",
  // no2: "Nitrogen Dioxide",
  o3: "O3",
  // co2: 'Carbon Dioxide',
  co: "CO" // nh3: 'Ammonia',
  // benzene: 'Benzene',
  // xylene: 'Xylene',
  // toluene: 'Toluene',

};
$itQ5$exports = {
  POLLUTANT_LABEL_COLOR_REF: $itQ5$var$POLLUTANT_LABEL_COLOR_REF,
  POLLUTANT_RANGE_REF: $itQ5$var$POLLUTANT_RANGE_REF,
  POLLUTANT_UNITS: $itQ5$var$POLLUTANT_UNITS,
  POLLUTANT_FULL_NAME: $itQ5$var$POLLUTANT_FULL_NAME,
  POLLUTANT_OPTIONS: $itQ5$var$POLLUTANT_OPTIONS
};

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $itQ5$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $itQ5$exports;
  });
}
})();