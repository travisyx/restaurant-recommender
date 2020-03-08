var lat = 0;
var long = 0;

// Asks for permission to get the user's coordinates and stores them if allowed
function enableLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      sessionStorage.setItem("latitude", lat);
      sessionStorage.setItem("longitude", long);
    });
  } else {
    console.log("Geolocation not available");
  }
}
// Moves to the map
function moveToUserCoords() {
  if (
    sessionStorage.getItem("latitude") === null ||
    sessionStorage.getItem("longitude") === null
  ) {
    alert(
      "You have not enabled the location to be set. Please allow for the location to be set."
    );
  } else {
    sessionStorage.setItem("isCustom", "false");
    sessionStorage.setItem(
      "prefUserLoc",
      document.getElementById("prefUserLoc").value
    );
    window.location.href = "map.html";
  }
}
// Stores what is inputted for the coordinates and moves to the map
function moveToCustomCoords() {
  var testLat = document.getElementById("customLat").value;
  var testLong = document.getElementById("customLong").value;
  if ((testLat == null || testLat == "", testLong == null || testLong == "")) {
    alert("At least one of the latitude or longitude inputs is empty.");
  } else if (
    testLat < -90 ||
    testLat > 90 ||
    testLong < -180 ||
    testLong > 180
  ) {
    alert("Please enter valid coordinates.");
  } else {
    sessionStorage.setItem(
      "customLat",
      document.getElementById("customLat").value
    );
    sessionStorage.setItem(
      "customLong",
      document.getElementById("customLong").value
    );
    sessionStorage.setItem(
      "prefCustomLoc",
      document.getElementById("prefCustomLoc").value
    );
    sessionStorage.setItem("isCustom", "true");
    window.location.href = "map.html";
  }
}
// Stores what is inputted from the search query and moves to the map
function moveToCustomSearch() {
  var testSearch = document.getElementById("searchQuery").value;
  if (testSearch == null || testSearch == "") {
    alert("The search query is empty.");
  } else {
    sessionStorage.setItem(
      "searchQuery",
      document.getElementById("searchQuery").value
    );
    sessionStorage.setItem(
      "prefSearchQuery",
      document.getElementById("prefSearchQuery").value
    );
    window.location.href = "customMap.html";
  }
}
