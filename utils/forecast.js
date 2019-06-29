const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/070f7ff8e08c0675749a0794e25fe779/${encodeURIComponent(
    lat
  )},${encodeURIComponent(long)}?lang=pt`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback("Unable to find this coordinate", undefined);
    } else {
      const forecastString = `${
        response.body.daily.data[0].summary
      } It is currently ${response.body.currently.temperature}. There is a ${
        response.body.currently.precipProbability
      }% chance of rain.`;
      callback(undefined, forecastString);
    }
  });
};

module.exports = forecast;
