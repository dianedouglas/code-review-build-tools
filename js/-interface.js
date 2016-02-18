var module = require('./../js/module.js');
initMap = module.initMap;
$(document).ready(function(){
  console.log('yo! I am working!');
  module.hello();
  $('#go').click(function(){
    // $.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAfuASVNuk6GPEDuEiqaXpeI4uT4rFKTnA&callback=initMap", function(response){
    //   console.log(response)
    // });
    $.get(
      url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfuASVNuk6GPEDuEiqaXpeI4uT4rFKTnA",
      data: data,
      success: initMap,
      dataType: 'json',
      origin: "http:"
    );
  });
});
