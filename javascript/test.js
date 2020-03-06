var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "GET",
  hostname: "api.yelp.com",
  path:
    "/v3/businesses/search?latitude=28.6778&longitude=-81.3278&term=restaurant&radius=8000",
  headers: {
    Authorization:
      "Bearer p5bQJH1HPyIfJCSGlFS22FkYCWiRiDR1rQEDEfr8_MZUlzrOo4i3CEc8qVDdTdXbk1DmHJdnfuErzo4vuoS1_4tGvZB-augVp9Lg6jGaa9uV-BlBkNzho4QQP7ZRXnYx"
  },
  maxRedirects: 20
};

var temp = new Array();
//
var req = https.request(options, function(res) {
  var chunks = [];

  res.on("data", function(chunk) {
    chunks.push(chunk);
  });

  res.on("end", function(chunk) {
    var body = Buffer.concat(chunks);
    // console.log(body.toString());
    temp.push(body.toString());
  });

  res.on("error", function(error) {
    console.error(error);
  });
});

req.end();

async function wait() {
  await req;
  console.log("aaas" + temp);
}

wait();
