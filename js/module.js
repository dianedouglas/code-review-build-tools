exports.hello = function(){
  console.log('hello');
}

exports.initMap = function() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  exports.map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: exports.map,
    position: myLatLng,
    title: 'Hello World!'
  });
}
