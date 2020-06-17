// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"itQ5":[function(require,module,exports) {
var POLLUTANT_LABEL_COLOR_REF = [{
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
var POLLUTANT_RANGE_REF = {
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
var POLLUTANT_UNITS = {
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
var POLLUTANT_FULL_NAME = {
  // pm1: 'PM 1',
  pm25: "Particulate matter 2.5",
  pm10: "Particulate matter 10",
  so2: "Sulpher dioxide",
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
var POLLUTANT_OPTIONS = {
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
module.exports = {
  POLLUTANT_LABEL_COLOR_REF: POLLUTANT_LABEL_COLOR_REF,
  POLLUTANT_RANGE_REF: POLLUTANT_RANGE_REF,
  POLLUTANT_UNITS: POLLUTANT_UNITS,
  POLLUTANT_FULL_NAME: POLLUTANT_FULL_NAME,
  POLLUTANT_OPTIONS: POLLUTANT_OPTIONS
};
},{}]},{},["itQ5"], null)