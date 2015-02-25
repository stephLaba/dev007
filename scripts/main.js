
var parallax = {};

var parallaxLayer = {};



parallax.mouseMap = function(){

$(".parallaxFrame").on( "mousemove", function( event ) {
	console.log("this works x " +  event.pageX + " y " + event.pageY);
	var xCoord = event.pageX;
	var yCoord = event.pageY;
 
});

}


	
	$(function() {

		parallax.mouseMap();
	});
// doc ready end
