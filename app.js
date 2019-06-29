const request = require("request");

const url =
  "https://api.darksky.net/forecast/070f7ff8e08c0675749a0794e25fe779/37.8267,-122.4233?lang=pt";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.daily.data[0].summary} It is currently ${
      response.body.currently.temperature
    }. There is a ${response.body.currently.precipProbability}% chance of rain.`
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnNreSIsImEiOiJjanhnd3BmMXIwODdsM3htdjRlMTFrb2M0In0.cu6PXNO4Y1U3aKExZZzF6A";

request({ url: geocodeURL, json: true }, (error, response) => {
  const lat = response.body.features[0].geometry.coordinates[1];
  const long = response.body.features[0].geometry.coordinates[0];
  console.log(lat, long);
});
