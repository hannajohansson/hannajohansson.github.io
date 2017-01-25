// WEBINT 2016 LAB1 Hanna Johansson 

// Submit popup message
function submit() {
    alert("Your information have been submitted.");
}


// MAP: Geolocation
// from lecture slides
var map = document.getElementById("mapholder");

function GetLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } 
    else {
        alert = "Your browser doesn't support geolocation, sorry.";
        console.log("Browser error.")
    }
}

function GeoLocation() {
	navigator.geolocation.getCurrentPosition(success, error);
}

//Successful to generate map based on current position
function success(position){
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions ={
		zoom: 15, center: latlng,
		mapTypeControl: false, navigationControlOptions:
		{style: google.maps.NavigationControlStyle.SMALL},
		mapyTypeId: google.maps.MapTypeId.ROADMAP};
	
	map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
		
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "You are here!"});

	console.log("Successful to generate map.")
}

//Error when generating map based on current position
function error(){
	alert("Your browser does not support geolocation.");
	console.log("Browser error.")
}

function lookup() {
	var address = document.getElementById("address").value;
	geocoder.geocode({'address': address},
	function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map. setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker( { 
				map: map, position: results[0].geometry.location});
		}
		else  {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});	
}



// VIDEO
//I should check this: http://webdesign.about.com/od/video/ss/html5-video.htm

// Set current time
// http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_currenttime
//int seconds = Integer.parseInt(document.getElementbyId("time").value); //convert string to integer
function setCurTime(time) {
	var vid = document.getElementById("myVideo"); 
    vid.currentTime = time;
    vid.play(); 
    console.log(time);
}

//Change the video source/url to another video
// https://www.sitepoint.com/html5-video-fragments-captions-dynamic-thumbnails/
function changeVideo(url) {
    document.getElementById("myVideo").innerHTML= "<source src='"+url+"'>";
    console.log("New url:" + url);
}













