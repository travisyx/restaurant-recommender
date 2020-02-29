var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.1478, lng: -118.1445},
          zoom: 8
        });
      }