var lat = 0;
var lng = 0;

// Asks for permission to get the user's coordinates and stores them if allowed
function enableLocation() {
  // Tests if the browser allows for geolocation
  if ("geolocation" in navigator) {
    // Gets the location and stores it
    navigator.geolocation.getCurrentPosition(async function(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      sessionStorage.setItem("latitude", lat);
      sessionStorage.setItem("longitude", lng);
    });
  } else {
    console.log("Geolocation not available");
  }
}

// Moves to the map
function moveToUserCoords() {
  // Tests if the user enabled geolocation
  if (
    !(
      sessionStorage.getItem("latitude") === null ||
      sessionStorage.getItem("longitude") === null
    )
  ) {
    sessionStorage.setItem("isCustom", "userCoords");

    sessionStorage.setItem(
      "prefUserLoc",
      document.getElementById("prefUserLoc").value
    );

    window.location.href = "mapSearch.html";

    // Geolocation not enabled
  } else {
    alert(
      "You have not enabled the location to be set. Please allow for the location to be set."
    );
  }
}

// Stores what is inputted for the coordinates and moves to the map
function moveToCustomCoords() {
  var testLat = document.getElementById("customLat").value;
  var testLng = document.getElementById("customLng").value;

  // Tests if the user did not input anything
  if (!(testLat == null || testLat == "", testLng == null || testLng == "")) {
    // Tests if the coordinates are valid
    if (testLat >= -90 && testLat <= 90 && testLng >= -180 && testLng <= 180) {
      // Stores the values
      sessionStorage.setItem(
        "customLat",
        document.getElementById("customLat").value
      );

      sessionStorage.setItem(
        "customLng",
        document.getElementById("customLng").value
      );

      sessionStorage.setItem(
        "prefCustomLoc",
        document.getElementById("prefCustomLoc").value
      );

      sessionStorage.setItem("isCustom", "customCoords");
      window.location.href = "mapSearch.html";

      // Invalid latitude or longitude
    } else {
      alert("At least one of the latitude or longitude inputs is invalid.");
    }

    // Empty input
  } else {
    alert("At least one of the latitude or longitude inputs is empty.");
  }
}

// Stores what is inputted from the search query and moves to the map
function moveToCustomSearch() {
  var testSearch = document.getElementById("searchQuery").value;

  // Tests if the user left the input are empty
  if (!(testSearch == null || testSearch == "")) {
    sessionStorage.setItem(
      "searchQuery",
      document.getElementById("searchQuery").value
    );

    sessionStorage.setItem(
      "prefSearchQuery",
      document.getElementById("prefSearchQuery").value
    );

    sessionStorage.setItem("isCustom", "searchQuery");
    window.location.href = "mapSearch.html";

    // Empty input
  } else {
    alert("The search query is empty.");
  }
}
