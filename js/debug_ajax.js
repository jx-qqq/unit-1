//initialize function called when the script loads
function initialize(){
	debugAjax();
};

//define the debugCallback function
function debugCallback(response){
	//append the following strings to mydiv
	return $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(response));
};

//define the debugAjax function
function debugAjax(){
	//crete a varible called mydata
	var mydata;
  //basic jQuery ajax method
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			//if the success state is reached, pass the response to mydata
			mydata = response;
		 //then call the debugCallback function
			debugCallback(mydata);
		}
	});
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
