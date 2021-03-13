const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
const url =
  "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22";

// A connection directly from the front-end to the url above wasn't possible because of a CORS issue,
// so a js file was created and installed express to allow it to use CORS. The connection made in the getWeather() method is done
// to localhost:3000/

app.use(cors());

app.get("/", (req, res) => {
  request(url, (err, response, body) => {
    return res.status(200).json(body);
  });
});

app.listen(3000, () => {
  console.log("listening");
});
