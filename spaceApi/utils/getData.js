const axios = require('axios');

const fetchMainData = async () => {
  const response = await axios.get('https://data.nasa.gov/resource/y77d-th95.json');
  return response.data;
};

const fetchWeatherData = async () => {
  const weatherData = await axios.get(
    'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
  );
  return weatherData.data;
};

module.exports = { fetchMainData, fetchWeatherData };
