var express = require('express');
var router = express.Router();

const { fetchMainData, fetchWeatherData } = require('../utils/getData');

const { filterByYear, filterByMass } = require('../utils/filterData');

const { getLatestWeatherObject } = require('../utils/analyzeWeather');

const { validateYear } = require('../utils/validation/validateYear');
const { validateMass } = require('../utils/validation/validateMass');

const ApiError = require('../errors/ApiError');

router.post('/', async (req, res, next) => {
  try {
    const meteorData = await fetchMainData();
    const weatherData = await fetchWeatherData();

    let { inputYear, inputMass } = req.body;

    // if year is not provided, throw an error
    if (inputYear) {
      inputYear = validateYear(inputYear);
    } else {
      throw new Error('missing inputYear');
    }

    // filter by year
    let filteredData = meteorData.filter((obj) => filterByYear(obj.year, inputYear));

    // if Mass is provided, validate and filter by Mass
    if (inputMass) {
      inputMass = validateMass(inputMass);
      filteredData = filteredData.filter((obj) => filterByMass(obj.mass, inputMass));
    }

    // get the latest weather object
    const latestWeatherDate = getLatestWeatherObject(weatherData);

    // get the average weather of the latest date available
    const hws = weatherData[latestWeatherDate].HWS.av;

    // put HWS on every filtered object
    filteredData = filteredData.map((obj) => ({ ...obj, HWS: hws }));
    if (filteredData.length === 0) {
      res.send('no data found with these parameters');
    } else {
      res.send(filteredData);
    }
  } catch (e) {
    if (e.message === 'missing inputYear') {
      next(ApiError.missingData('Please provide a year'));
    }
    next(ApiError.badRequest('Could not fetch data, please try again shortly'));
  }
});

module.exports = router;
