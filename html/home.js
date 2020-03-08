var lat = 0;
var long = 0;
function enableLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      localStorage.setItem("latitude", lat);
      localStorage.setItem("longitude", long);
    });
  } else {
    console.log("not available");
  }
}

function moveToUserCoords() {
  if (
    localStorage.getItem("latitude") === null ||
    localStorage.getItem("longitude") === null
  ) {
    alert(
      "You have not enabled the location to be set. Please allow for the location to be set."
    );
  } else {
    localStorage.setItem("isCustom", "false");
    window.location.href = "map.html";
  }
}
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
    localStorage.setItem(
      "customLat",
      document.getElementById("customLat").value
    );
    localStorage.setItem(
      "customLong",
      document.getElementById("customLong").value
    );
    localStorage.setItem("isCustom", "true");
    window.location.href = "map.html";
  }
}

function moveToCustomSearch() {
  var testSearch = document.getElementById("searchQuery").value;
  if (testSearch == null || testSearch == "") {
    alert("The search query is empty.");
  } else {
    localStorage.setItem(
      "searchQuery",
      document.getElementById("searchQuery").value
    );
    window.location.href = "customMap.html";
  }
}
