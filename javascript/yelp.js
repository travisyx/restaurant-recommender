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

// Pasadena
// 34.1478
// -118.1445
// The search request URL
var url =
  "https://api.yelp.com/v3/businesses/search?latitude=" +
  lat +
  "&longitude=" +
  long +
  "&term=restaurant&radius=" +
  distance +
  "&limit=50";

// Gets the requests using the Yelp Fusion API
function getData() {
  var answer = new Array();
  var temp = fetch(url, requestOptions)
    .then(response => response.json())
    .then(function(data) {
      var i = 0;
      for (i = 0; i < data.businesses.length; ++i) {
        answer.push({
          name: data.businesses[i].name,
          lat: data.businesses[i].coordinates.latitude,
          long: data.businesses[i].coordinates.longitude,
          rating: data.businesses[i].rating,
          phone: data.businesses[i].phone,
          dist: data.businesses[i].distance,
          revCt: data.businesses[i].review_count,
          price: data.businesses[i].price
        });
      }
      // Sorts the input array first by rating then by distance
      answer.sort((obj1, obj2) =>
        obj1.rating > obj2.rating
          ? 1
          : obj1.rating === obj2.rating
          ? obj1.distance < obj2.distance
            ? 1
            : -1
          : -1
      );
      answer.reverse();
      console.log(answer);
    })
    .catch(error => console.log(error));
}

getData();
