// var key = "AIzaSyDcxCTneoolsMGhrbXjxf14jg9ozDrP-QQ"
// var category = document.getElementById("").value;

var category = $('input[name="offense"]:checked').val();
function getData(){

var category = $('input[name="offense"]:checked').val();

$.ajax({
	   	url: "https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=Friday&$order=date DESC&$where=date>'2016-01-01T12:00:00'&category="+ category,
	   	dataType: "json",
	   	success: function(data) {
	   		console.log(data)
	   		console.log(data.length)

	var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7599, lng: -122.4148},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  	

  	for (var i = 0; i < data.length; i++) {
  	console.log(parseFloat(data[i].location.latitude) +", " +parseFloat(data[i].location.longitude))

  	var marker = new google.maps.Marker({
        position:{lat: parseFloat(data[i].location.latitude) , lng: parseFloat(data[i].location.longitude)},
        map: map,
        title:data[i].dayofweek + ", "+ data[i].date.substring(0,10) +  " Resolution: " + data[i].resolution

  	// var marker = new google.maps.Marker({
   //      position:{lat: parseFloat(data[i].location) , lng: parseFloat(data[i].location)},
   //      map: map
    });


	}
	}

})
}