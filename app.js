

function getData(){

//get the category from check boxes to feed to our url query string
var category = $('input[name="offense"]:checked').val();

//fire off an ajax request with our url query string
//remember to pass in the category to our query string as well as the day of the week 

//feel free to play around with the date, time, etc to see what results you get!

$.ajax({
	   	url: "https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=Friday&$order=date DESC&$where=date>'2017-01-01T12:00:00'&category="+ category,
	   	dataType: "json",
	   	success: function(data) {

        //ALWAYS console.log the data returned from our success function and see what we're working with here


      //create new instance of the map for to drop our markers
    	var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7599, lng: -122.4148},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  	

      //now the fun part: let's drop markers on the map to show where crime takes place

      //HINT: you will need to iterate over the data and drop a marker using 
      //the longitude and latitude which are in the response object 
      //we received in our ajax call

      //Check out the way to create a marker by visiting 
      //https://developers.google.com/maps/documentation/javascript/examples/marker-simple

      //EXTRA HINT: what data type is longitude and latitude in your response?
      //is that the data type you are expecting... hmmmmmmmmm???
  	   for (var i = 0; i < data.length; i++) {

        	var marker = new google.maps.Marker({
              position:{lat: parseFloat(data[i].location.latitude) , lng: parseFloat(data[i].location.longitude)},
              map: map,
              title:data[i].dayofweek + ", "+ data[i].date.substring(0,10) +  " Resolution: " + data[i].resolution

            });


	       }
	   }

  })
}