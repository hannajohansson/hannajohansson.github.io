/********************************
	START PAGE
********************************/

//Show entire div after pressing a button
function showDiv() {
   document.getElementById('question1').style.display = "block";
   document.getElementById('welcome').style.display = "none";
}

//Show entire div after pressing a button
function showMap() {
   document.getElementById('map').style.display = "block";
   document.getElementById('page').style.display = "none";
}



/********************************
	FOOTER
********************************/
 $(document).ready(function() {

   var docHeight = $(window).height();
   var footerHeight = $('.footer').height();
   var footerTop = $('.footer').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('.footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }
 });





