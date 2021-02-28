const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const unirest = require("unirest");
const apikey = process.env.API_KEY;

app.use(cors());
app.use(express.json());

app.get("/api/photos", (req, res) => {
  //endpoint for flickr public feed
  const request = unirest(
    "GET",
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
  );
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body);
  });
});

app.get("/api/search/:tags", (req, res) => {
  //endpoint for flickr image search
  const value = req.params.tags;
  const request = unirest(
    "GET",
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
      apikey +
      "&tags=" +
      value +
      "&format=json&nojsoncallback=1"
  );
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body);
  });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = server;
