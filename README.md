# Air Quality Index (AQI) Calculator

> Free and open AQI calculator. 

aqi-calculator is an NPM package that allows you to calculate Air Quality Index (AQI) with the help of pollutant concentrations ranging from `PM2.5` `PM10` `SO2` `NOX` `O3` `CO`. The package calculates AQI according to the Indian National AQI Standards.

## Why aqi-calculator?

We at Blue Sky Analytics make use of AQI calculations to power our air quality application (BreeZo) and its API. Therefore, we are making this independent calculator to set the same standard of calculation across all our applications.


## Installation

#### Using Browser

```html
<script src="https://unpkg.com/aqi-calculator@1.0.2/dist/aqi-calculator.min.js"></script>
```

#### Using NPM

```shell
npm install aqi-calculator
```

## Client-Side Example - Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example AQI Calculator</title>
  </head>
  <body>
    <script src="https://unpkg.com/aqi-calculator@1.0.2/dist/aqi-calculator.min.js"></script>
    <script>
      var DATA = [
        {
          datetime: "2020-03-27T13:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example
          pm25: null,
          pm10: null,
          so2: null,
          no: null,
          nox: null,
          no2: null,
          o3: null,
          co: null,
        },
        {
          datetime: "2020-03-27T14:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
          pm25: 294,
          pm10: 297,
          so2: 3,
          no: 32,
          nox: 41,
          no2: 18,
          o3: 63,
          co: null,
        },
        {
          datetime: "2020-03-27T15:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
          pm25: 213,
          pm10: 275,
          so2: 5,
          no: 33,
          nox: 43,
          no2: 19,
          o3: 59,
          co: null,
        }
      ]
      
      var AQI = aqiCalculator(DATA)
      document.write(AQI)
    </script>
  </body>
</html>
```

## Client-Side Example - React

```javascript
import React from 'react';
import aqiCalculator from 'aqi-calculator'

const DATA = [
  {
    datetime: "2020-03-27T13:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: null,
    pm10: null,
    so2: null,
    no: null,
    nox: null,
    no2: null,
    o3: null,
    co: null,
  },
  {
    datetime: "2020-03-27T14:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: 294,
    pm10: 297,
    so2: 3,
    no: 32,
    nox: 41,
    no2: 18,
    o3: 63,
    co: null,
  },
  {
    datetime: "2020-03-27T15:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: 213,
    pm10: 275,
    so2: 5,
    no: 33,
    nox: 43,
    no2: 19,
    o3: 59,
    co: null,
  }
]

const AQI = () => {
  const AQI = aqiCalculator(DATA)
  return AQI
}

export default AQI
```


## Server-Side Example - NodeJs

```javascript
aqiCalculator = require("aqi-calculator")

const DATA = [
  {
    datetime: "2020-03-27T13:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: null,
    pm10: null,
    so2: null,
    no: null,
    nox: null,
    no2: null,
    o3: null,
    co: null,
  },
  {
    datetime: "2020-03-27T14:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: 294,
    pm10: 297,
    so2: 3,
    no: 32,
    nox: 41,
    no2: 18,
    o3: 63,
    co: null,
  },
  {
    datetime: "2020-03-27T15:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example 
    pm25: 213,
    pm10: 275,
    so2: 5,
    no: 33,
    nox: 43,
    no2: 19,
    o3: 59,
    co: null,
  }
]

const AQI = aqiCalculator(DATA)
console.log(AQI)

```