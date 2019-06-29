const request = require("request");

const url =
  "https://api.darksky.net/forecast/070f7ff8e08c0675749a0794e25fe779/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `It is currently ${response.body.currently.temperature}. There is a ${
      response.body.currently.precipProbability
    }% chance of rain.`
  );
});
