var lat = 0;
var long = 0;
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
    lat = position.coords.latitude;
    long =  position.coords.longitude;
    document.getElementById("lat").innerHTML = lat;
    document.getElementById("long").innerHTML = long;
    });
} else {
    console.log("not available");
}
export{lat};
export{long};