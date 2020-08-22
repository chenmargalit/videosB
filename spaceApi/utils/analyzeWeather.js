const getLatestWeatherObject = (weatherData) => {
  const keys = Object.keys(weatherData);
  numbers = [];
  for (let i = 0; i < keys.length; i++) {
    if (!isNaN(keys[i])) {
      // is a number
      numbers.push(parseInt(keys[i]));
    }
  }
  return Math.max(...numbers);
};

module.exports = { getLatestWeatherObject };
