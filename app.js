const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Belo Horizonte", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-75.7008, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
