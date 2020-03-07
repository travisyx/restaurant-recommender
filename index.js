const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/html")));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.post("/api", (request, response) => {
  console.log("Got a request");
  var prom = getData(request.body.lat, request.body.long);
  console.log(prom);
  response.json(prom);
});

const fetch = require("node-fetch");
global.fetch = fetch;
global.Headers = fetch.Headers;

// Sets the authorization key to the one generated for this project
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer p5bQJH1HPyIfJCSGlFS22FkYCWiRiDR1rQEDEfr8_MZUlzrOo4i3CEc8qVDdTdXbk1DmHJdnfuErzo4vuoS1_4tGvZB-augVp9Lg6jGaa9uV-BlBkNzho4QQP7ZRXnYx"
);

var lat = 34.1478;
var long = -118.1445;
var distance = 8000;

// Sets the request options for the search
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

// The search request URL
// var url =
//   "https://api.yelp.com/v3/businesses/search?latitude=" +
//   lat +
//   "&longitude=" +
//   long +
//   "&term=restaurant&radius=" +
//   distance +
//   "&limit=50";

// Gets the requests using the Yelp Fusion API
function getData(inpLat, inpLong) {
  var url =
    "https://api.yelp.com/v3/businesses/search?latitude=" +
    inpLat +
    "&longitude=" +
    inpLong +
    "&term=restaurant&limit=50";
  return fetch(url, requestOptions);
}
