import{lat} from "./location"
import{long} from "./location"

console.log(lat);
console.log(long);
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    zoom: 15
    }); 
}
document.getElementById("lat").innerHTML = lat;
document.getElementById("long").innerHTML = long;